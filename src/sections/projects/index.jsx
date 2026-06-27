import { glossary } from "../../data/content";
import { projects } from "./data";
import Term from "../../popover/Term";

function ProjectCard({p}) {
    return (
        <article className={'proj-card'}>
            <header className="proj-card__head">
                <h3>
                    {p.title}
                    {p.note && (
                        <Term eyebrow="ENGINNERING NOTE" title={p.title} body={p.note}>
                            ⓘ
                        </Term>
                    )}
                </h3>
                <span className="proj-card__sub">{p.sub}</span>
            </header>
        </article>
    )
}

export default function Projects() {
    return (
        <section className="section" id="projects">
            <p className="eyebrow eyebrow--section">
                <span className="sec-num">04</span> / PROJECTS
            </p>
            <p className="section__intro">
                Each entry is read like a component datasheet. For more details press ⓘ
            </p>
            <div className="project-grid">
                {projects.map(p=><ProjectCard p={p} key={p.id}/>)}
            </div>
        </section>
    )
}