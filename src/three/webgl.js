export function hasWebGL() {
    try{
        const canvas=document.createElement('canvas')
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
    }
    catch {
        return false
    }
}

export function prefersReducedMotion() {
    return typeof window!='undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce').matches
}