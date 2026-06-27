import {skills} from './data'

export default function Skills() {
    return (
        <section className='section' id="skills">
            <p className='eyebrow eyebrow--section'>
                <span className='sec-num'>05</span> / SKILLS
            </p>
            <div className='pinout'>
                {skills.map(row=>(
                    <div className='pinout__row' key={row.label}>
                        <span className='pinout__label'>{row.label}</span>
                        <div className='pinout_pins'>
                            {row.pins.map(pin=><span key={pin}>{pin}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}