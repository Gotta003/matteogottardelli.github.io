import { useState, useRef, useCallback, useEffect } from "react"
import { PopoverCtx } from "./popoverContext"
import { createPortal } from "react-dom"

export default function PopoverProvider({children}) {
    const [active, setActive]=useState(null)
    const panelRef=useRef(null)
    const show=useCallback((id, x, y, content, pinned=false)=>{
        setActive(prev=>{
            if(pinned && prev?.id===id && prev?.pinned) return null
            return {id, x, y, pinned, ...content}
        })
    }, [])

    const move=useCallback((id, x, y)=>{
        setActive(prev=>(prev && prev.id===id && !prev.pinned ? {...prev, x, y} : prev))
    }, [])

    const hide=useCallback((id)=>{
        setActive(prev=>(prev && prev.id===id && !prev.pinned ? null : prev))
    }, [])

    const close=useCallback(()=>setActive(null), [])

    useEffect(() => {
        if(!active?.pinned) {
            return
        }
        const onDocClick=(e)=>{
            if(panelRef.current && !panelRef.current.contains(e.target)) {
                close()
            }
        }
        const onKey=(e)=>{
            if(e.key==='Escape') {
                close()
            }
        }
        document.addEventListener('click', onDocClick, true)
        document.addEventListener('keydown', onKey)
        return () => {
            document.removeEventListener('click', onDocClick, true)
            document.removeEventListener('keydown', onKey)
        }
    }, [active?.pinned, close])

    return (
        <PopoverCtx.Provider value={{show}}>
            {children}
            {active && createPortal(
                <Panel ref={panelRef} active={active}/>, document.body
            )}
        </PopoverCtx.Provider>
    )
}

function Panel({active, ref}) {
    const [coords, setCoords]=useState({left: active.x, top: active.y, ready: false})

    useEffect(()=>{
        const el=ref.current
        if(!el) return
        const PAD=14
        const MARGIN=16
        const rect=el.getBoundingClientRect()
        let left=active.x+MARGIN
        let top=active.y+MARGIN
        if(left+rect.width+PAD>window.innerWidth) {
            left=active.x-rect.width-MARGIN
        }
        if(top+rect.height+PAD>window.innerHeight) {
            top=active.y+rect.height-MARGIN
        }
        if(left<PAD) {
            left=PAD
        }
        if(top<PAD) {
            top=PAD
        }
        setCoords({left, top, ready: true})
    }, [active.x, active.y, active.id, ref])

    return (
        <div ref={ref} className={`popover ${active.pinned ? 'popover--pinned' : ''}`} style={{
            left: coords.left,
            top: coords.top,
            opacity: coords.ready ? 1 : 0
        }} role="tooltip">
            {active.eyebrow && <div className="popover__eyebrow">
                {active.eyebrow}
            </div>}
            {active.title && <div className="popover__title">{active.title}</div>}
            {active.body && <div className="popover__body">{active.body}</div>}
            {active.pinned && <div className="popover__hint">tap elsewhere to close</div>}
        </div>
    )
}