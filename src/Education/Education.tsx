import { IonApp, IonContent, IonPage } from '@ionic/react'
import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <>
        <IonPage>
            <IonContent fullscreen>
                <div className='Education-Index'>
                    <div className='Education-Body'>
                        <h1>Education / Skill</h1>
                        <div className="Timeline-Index">
                            <div className='Timeline-Education'>
                                <div className='Left-Timeline-Slider'>
                                    <ul>General Education
                                        <li>
                                            Year 2015: Graduate from Dara Academy
                                            <ul>
                                                <li>Mathematics-Science Programe</li>
                                            </ul>
                                        </li>
                                        <li>Year 2019: Graduate from Chiang Mai University
                                            <ul>
                                                <li>Faculty of Associate Medical Science</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul>Coding Enducation
                                        <li>
                                            Year 2022: Udemy & Dek-Earth, Dek-Nut
                                            <ul>
                                                <li>Front-End Developer
                                                    <ul>
                                                        <li>HTML</li>
                                                        <li>CSS</li>
                                                        <li>JavaScript</li>
                                                        <li>Ionic Framework</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='Timeline-Skill'>
                                <div className='Right-Timeline-Slider'>
                                    <ul>
                                        Common Skill and Knowledge
                                        <li>Physical Therapy</li>
                                        <li>Massage Therapy</li>
                                    </ul>
                                    <ul>
                                        Coding Skill and Knowledge
                                        <li>Front-End Developer
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>Ionic Framework</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    </>
  )
}

export default Education