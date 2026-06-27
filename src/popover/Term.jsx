import {useState} from 'react'
import { usePopover } from './popoverContext'

let idCounter=0

export default function Term({children, eyebrow, title, body, className=''}) {
    const {show,move,hide}=usePopover()
    const [id]=useState(()=>`term-${++idCounter}`)
    const content={eyebrow, title, body}
    const onEnter=(e)=>show(id, e.clientX, e.clientY, content, true)
    const onMove=(e)=>move(id, e.clientX, e.clientY)
    const onLeave=(e)=>hide(id)
    const onClick=(e)=>{
        e.stopPropagation()
        show(id, e.clientX, e.clientY, content, true)
    }
    const onKeyDown=(e)=>{
        if(e.key==='Enter' || e.key===' ') {
            e.preventDefault()
            const rect=e.currentTarget.getBoundingClientRect()
            show(id, rect.left+rect.width/2, rect.bottom, content, true)
        }
    }

    return (
        <span className={`term ${className}`} tabIndex={0} role="button" aria-describedby={id} onMouseEnter={onEnter} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick} onKeyDown={onKeyDown}>
            {children}
        </span>
    )
}