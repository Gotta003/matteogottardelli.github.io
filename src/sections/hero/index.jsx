import { lazy, useState } from "react"
import {hero} from "./data"
import Term from "../../popover/Term"
import {glossary} from '../../data/content'
import LazyScene from "../../three/LazyScene"

const PCBScene=lazy(()=>import('./PCBScene'))

/*function spectroBars(count=56) {
    const [bars]=useState(()=>Array.from({length: count}, ()=>({
        h1: (0.15+Math.random()*0.35).toFixed(2),
        h2: (0.45+Math.random()*0.35).toFixed(2),
        dur: (1.1+Math.random()*1.2).toFixed(2),
    })))
    return bars
}*/
function SpectroFallback() {
    return (
        <div className="hero_spectro" aria-hidden="true">
            {Array.from({length: 56}, (_, i)=>{
                const h1=(0.15+Math.random()*0.35).toFixed(2)
                const h2=(0.45+Math.random()*0.35).toFixed(2)
                const dur=(1.1+Math.random()*1.2).toFixed(2)
                const delay=(i*0.022%1.2).toFixed(2)
                return (
                    <div key={i} className="bar" style={{'--h': h1, '--h2': h2, height: '100%', animationDuration: `${dur}s`, animationDelay: `${delay}s`}}/>
                )
            })}
        </div>
    )
}

export default function Hero() {
    //const bars=spectroBars()
    return (
        <header className="hero" id="top">
            <div className="hero__field" aria-hidden="true">
                <svg className="trace trace--hero" viewBox="0 0 1200 800" preserveAspectRatio="none">
                    <path d="M -50 120 L 300 120 L 340 160 L 700 160 L 740 120 L 1250 120" />
                    <path d="M -50 620 L 220 620 L 260 660 L 600 660 L 640 700 L 1250 700" />
                    <path d="M 980 -50 L 980 200 L 1040 260 L 1040 600" />
                    <circle cx="340" cy="160" r="4" />
                    <circle cx="740" cy="120" r="4" />
                    <circle cx="640" cy="700" r="4" />
                    <circle cx="1040" cy="260" r="4" />
                </svg>
            </div>
            <div className="hero__layout">
                <div className="hero__content">
                    <p className="eyebrow">{hero.eyebrow}</p>
                    <h1 className="hero__name">{hero.name[0]} <br/>{hero.name[1]}</h1>
                    <p className="hero__role" dangerouslySetInnerHTML={{__html: hero.role.replace('ACM EdgeSys 2026', '<strong>ACM EdgeSys 2026</strong>')}}/>
                    <div className="hero__actions">
                        <a href={hero.ctaPrimary.href} className="btn btn--solid">{hero.ctaPrimary.label}</a>
                        <a href={hero.ctaSecondary.href} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">{hero.ctaSecondary.label}</a>
                        <a href={hero.ctaTertiary.href} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">{hero.ctaTertiary.label}</a>
                    </div>
                    <div className="hero__meta">
                        {hero.meta.map(m=>(
                            <div key={m.label}>
                                <Term {...glossary[m.glossary]}>
                                    <span className="meta__num">{m.value}</span>
                                </Term>
                                <span className="meta__label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="hero__hint">{hero.hint}</p>
                </div>
            </div>
            <div className="hero__canvas-wrap">
                <LazyScene label="PCB 3D" fallback={<SpectroFallback/>}>
                    <PCBScene/>
                </LazyScene>
            </div>
        </header>
    )
}