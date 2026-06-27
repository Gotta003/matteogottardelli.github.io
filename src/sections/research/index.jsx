import {lazy} from 'react'
import { publications } from './data'
import { glossary } from '../../popover/glossary'
import LazyScene from '../../three/LazyScene'
import Term from '../../popover/Term'

const CNNFCNScene=lazy(()=>import('./CNNFCNScene'))

const SceneFallback=()=>(
    <div className='cnnfcn-fallback'>
        <div className='cnnfcn-fallback__grid'>
            {Array.from({length: 16}, (_, i)=>(
                <div key={i} className='cnnfcn-fallback__node'/>
            ))}
        </div>
        <div className='cnnfcn-fallback__arrow'>\u2014 ENFORCE \u2014</div>
        <div className='cnnfcn-fallback__col'>
            {Array.from({length: 8}, (_, i)=>(
                <div key={i} className='cnnfcn-fallback__dense'/>
            ))}
        </div>
    </div>
)

export default function Research() {
    const {featured, ongoing}=publications
    return (
        <section className='section' id="research">
            <p className='eyebrow eyebrow--section'>
                <span className='sec-num'>02</span> / RESEARCH &amp; PUBLICATIONS
            </p>
            {/*LEFT TEXT*/}
            <div className='research__text'>
                <article className='pub-feature'>
                    <div className='pub-feature__tag'>{featured.tag}</div>
                    <h2 className='pub-feature__title'>{featured.title}</h2>
                    <p className='pub-feature__venue'>{featured.venue}</p>
                    <p className='pub-feature__body'>{featured.body}</p>
                    <div className='pub-feature__specs'>
                        {featured.specs.map(s=>(
                            <div key={s.label}>
                                <span>{s.label}</span>
                                {s.glossary ? <Term {...glossary[s.glossary]} className='term--underline'>{s.value}</Term> : s.value}
                            </div>
                        ))}
                    </div>
                </article>
                <div className='pub-grid'>
                    {ongoing.map(p=>(
                        <article className='pub-card' key={p.title}>
                            <div className='pub-card__status'>{p.status}</div>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </article>
                    ))}
                </div>
            </div>
            {/*RIGHT NETWORK*/}
            {/*<div className="research__canvas-wrap">
                <p className='canvas-label'>ENFORCE - CNN \u2014 FCN adaption</p>
                <LazyScene label="CNN\u2014FCN" fallback={<SceneFallback/>}>
                    <CNNFCNScene/>
                </LazyScene>
            </div>*/}
        </section>
    )
}