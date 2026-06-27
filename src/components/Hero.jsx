import { useState } from "react"
import Term from "../popover/Term"
import {glossary} from '../data/content'

function spectroBars(count=56) {
    const [bars]=useState(()=>Array.from({length: count}, ()=>({
        h1: (0.15+Math.random()*0.35).toFixed(2),
        h2: (0.45+Math.random()*0.35).toFixed(2),
        dur: (1.1+Math.random()*1.2).toFixed(2),
    })))
    return bars
}

export default function Hero() {
    const bars=spectroBars()

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
            <div className="hero__content">
                <p className="eyebrow">FIELD / EMBEDDED ML - DOC REV. 2026</p>
                <h1 className="hero__name">Matteo <br/>Gottardelli</h1>
                <p className="hero__role">
                    TinyML researcher, deploying deep learning on ultra-low-power embedded accelerators. First author, <strong>ACM EdgeSys 2026</strong>. Double MSc Embedded Systems &amp; Robotics, EIT Digital.
                </p>
                <div className="hero__spectro" aria-hidden="true">
                    {bars.map((b, i)=>(
                        <div key={i} className="bar" style={{
                            '--h': b.h1,
                            '--h2': b.h2,
                            height: '100%',
                            animationDuration: `${b.dur}s`,
                            animationDelay: `${b.delay}s`,                            
                        }}/>
                    ))}
                </div>
                <p className="hero__spectro-cap">live render - keyword-spotting input,16kHz / 40 mel bands</p>
                <div className="hero__actions">
                    <a href="#research" className="btn btn--solid">View research -></a>
                    <a href="https://github.com/Gotta003" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">Github -></a>
                </div>
                <div className="hero__meta">
                    <div>
                        <Term {...glossary.gestureNote}>
                            <span className="meta__num">0.9871</span>
                        </Term>
                        <span className="meta__label">gesture acc. @ 13KB</span>
                    </div>
                    <div>
                        <Term {...glossary.b2Note}>
                            <span className="meta__num">B2</span>
                        </Term>
                        <span className="meta__label">English, Cambridge Adv.</span>
                    </div>
                    <div>
                        <Term {...glossary.gradeNote}>
                            <span className="meta__num">109/110</span>
                        </Term>
                        <span className="meta__label">BSc final grade</span>
                    </div>
                </div>
                <p className="hero__hint">hover or tap numbers -> every spec on this page works the same way</p>
            </div>
        </header>
    )
}