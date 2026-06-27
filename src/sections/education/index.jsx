import {education, certs, contact} from './data'

export function Education() {
    return (
        <section className='section' id="education">
            <p className='eyebrow eyebrow--section'>
                <span className='sec-num'>06</span> / EDUCATION &amp; CERTIFICATIONS
            </p>
            <div className='edu-grid'>
                {education.map(e=>(
                    <article className='edu-card' key={e.title}>
                        <div className='edu-card__date'>{e.date}</div>
                        <h3>{e.title}</h3>
                        <p className='edu-card__org'>{e.org}</p>
                    </article>
                ))}
            </div>
            <div className='cert-row'>
                {certs.map(c=><div className='cert-chip' key={c}>{c}</div>)}
            </div>
        </section>
    )
}

export function Contact() {
    return (
        <footer className="contact" id="contact">
            <svg className="trace trace--footer" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
                <path d="M -50 60 L 250 60 L 290 100 L 900 100 L 940 60 L 1250 60" />
                <circle cx="290" cy="100" r="4" /><circle cx="940" cy="60" r="4" />
            </svg>
            <p className='eyebrow'>07 / CONTACT</p>
            <h2 className='contact__title'>Open to internshipts leading <br/> into a Master's thesis.</h2>
            <p className='contact__sub'>
                According to EIT Digital Track, I am looking for a placement that applies theoretical knowledge into industrial sides. Position in R&D in Computer Vision, Machine Learning and Embedded Systems Engineering Intern positions are preferred.
            </p>
            <div className='contact__links'>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.github} target="_blank" rel="noopener" noreferrer>github.com/Gotta003 ↗</a>
                <a href={contact.linkedin} target="_blank" rel="noopener" noreferrer>linkedin.com/in/matteo-gottardelli ↗</a>
            </div>
            <p className='contact__base'>Turku, Finland</p>
        </footer>
    )
}