import { experience } from "./data";

export default function Experience() {
    return (
        <section className="section" id="experience">
            <p className="eyebrow eyebrow--section">
                <span className="sec-num">03</span> / EXPERIENCE
            </p>
            <ol className="timeline">
                {experience.map(e=>(
                    <li className="timeline__item" key={e.title}>
                        <div className="timeline_date">{e.date}</div>
                        <div className="timeline__node"/>
                        <div className="timeline__body">
                            <h3>
                                {e.title}
                                {e.result && <span className="timeline__result"> - {e.result}</span>}
                            </h3>
                            <p className="timeline__org">{e.org}</p>
                            {e.body && <p className="timeline__lede">{e.body}</p>}
                            <ul className="timeline__list">
                                {e.bullets.map(b=> <li key={b}>{b}</li>)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}