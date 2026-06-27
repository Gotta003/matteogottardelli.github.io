/**
 * 1) Manage WebGL -> always static fallback
 * 2) prefers-reduced-motion -> Show static by default, but offer explicit opt-in button
 * 3) Off-screen -> don't burn GPU battery
 */
import { Suspense, useState } from "react";
import useInView from './useInView'
import {hasWebGL, prefersReducedMotion} from './webgl'

export default function LazyScene({children, fallback, label}) {
    const [ref, inView]=useInView()
    const [webgl]=useState(hasWebGL)
    const [reduced]=useState(prefersReducedMotion)
    const [userEnabled, setUserEnabled]=useState(false)
    const canRender=webgl && (!reduced || userEnabled) && inView

    return (
        <div className="scene3d" ref={ref}>
            {canRender ? (
                <Suspense fallback={fallback}>
                    {children}
                </Suspense>
            ):(
                <>
                    {fallback}
                    {webgl && reduced && !userEnabled && (
                        <button type="button" className="scene3d_enable" onClick={()=>setUserEnabled(true)}>
                            Show interactive 3D view{label ? ` - ${label}` : ''}
                        </button>
                    )}
                </>
            )}
        </div>
    )
}