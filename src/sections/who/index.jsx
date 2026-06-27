import {who} from './data'

export default function Who() {
    return (
        <section className="section" id="who">
            <p className='eyebrow eyebrow--section'>
                <span className='sec-num'>01</span> / WHO
            </p>
            <div className='who'>
                <div className='who__bio'>
                    {who.bio.map((p, i)=>(
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className='who__stats'>
                    {who.stats.map(s=>(
                        <div key={s.label} className='who__stat'>
                            <span className='who__stat-label'>{s.label}</span>
                            <span className='who__stat-value'>{s.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}