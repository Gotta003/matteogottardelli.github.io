import { useEffect, useRef, useState } from "react"

export default function useInView(rootMargin='200px') {
    const ref=useRef(null)
    const [inView, setInView]=useState(false)

    useEffect(()=>{
        const el=ref.current
        if(!el) {
            return;
        }
        const io=new IntersectionObserver(
            ([entry])=>setInView(entry.isIntersecting), {rootMargin, threshold: 0.01}
        )
        io.observe(el)
        return()=>io.disconnect()
    }, [rootMargin])
    return [ref, inView]
}