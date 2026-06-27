import {useState} from 'react'

//Links for NAV
const LINKS=[
    ['who', 'Who'],
    ['research', 'Research'],
    ['experience', 'Experience'],
    ['projects', 'Projects'],
    ['skills', 'Skills'],
    ['education', 'Education'],
]

export default function Nav() {
    const [open, setOpen]=useState(false)

    return (
        <nav className='nav'>
            <a href="#top" className='nav__mark'>
                MG<span className='nav__dot'>{`\u00b7`}</span>
            </a>
            <div className={`nav__links ${open ? `is-open` : ''}`}>
                {LINKS.map(([id, label])=>(
                    <a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label.toLowerCase()}</a>
                ))}
                <a key="#contact" className="nav__cta" onClick={()=>setOpen(false)}>Contact</a>
            </div>
            <button className='nav__burger' aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
                <span></span><span></span><span></span>
            </button>
        </nav>
    )
}