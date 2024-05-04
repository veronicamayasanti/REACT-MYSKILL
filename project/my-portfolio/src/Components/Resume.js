import {Component} from 'react'
import Slide from 'react-awesome-reveal'

class Resume extends Component {
    getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i <6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {

        if (!this.props.data) return null;

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className='info'>
                        {education.degree} <span>&bull;</span>
                        <em className='data'>{education.gradueted}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            )
        });

        const work = this.props.data.work.map(function (work) {
            return (
                <div key={work.compony}>
                    <h3>{work.compony}</h3>
                    <p className='info'>
                        {work.title}
                        <span>&bull;</span> <em className='data'>{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            )
        })

        const skills = this.props.data.skills.map((skills) => {
            const backgroundColor = this.getRandomColor();
            const className = "bar-expand " + skills.name.toLowerCase();
            const width = skills.level;

            return (
                <li key = {skills.name}>
                    <span style={{width, backgroundColor}} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });

        return (
            <section id="resume">
                <Slide left duration={1300}>
                    <div className='row education'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>education</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <div className='row item'>
                                <div className='twelve columns'>{education}</div>
                            </div>
                        </div>
                    </div>
                </Slide>

            <Slide left duration={1300}>
                    <div className='row work'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>work</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <div className='row item'>
                                <div className='twelve columns'>{work}</div>
                            </div>
                        </div>
                    </div>
            </Slide>

                <Slide left duration={1300}>
                    <div className='row skill'>
                        <div className='three columns header-col'>
                            <h1>
                                <span>skills</span>
                            </h1>
                        </div>

                        <div className='nine columns main-col'>
                            <p>{skillmessage}</p>
                            <div className='bars'>
                                <div className='skills'>{skills}</div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </section>
        )


    }
}

export default Resume;