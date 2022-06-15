import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import "./Education.css"
import HTMLLogo from "../img/logo/html-5.png"
import CSSLogo from "../img/logo/css-3.png"
import JSLogo from "../img/logo/java-script.png"
import ReactLogo from "../img/logo/react.png"
import IONLogo from "../img/logo/Ionic.png"
import PTLogo from "../img/logo/physical.png"
import DARALogo from "../img/logo/Dara.jpg"
import CMULogo from "../img/logo/cmu.png"
import { IonReactMemoryRouter } from '@ionic/react-router'

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
                                <div className='Skill-Image'>
                                    <img src={DARALogo} width="80px" height="80px" />
                                    <img src={CMULogo} width="80px" height="80px" />
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
                                                <li>ReactJS</li>
                                                <li>Ionic Framework</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className='Skill-Image'>
                                    <img src={HTMLLogo} width="50px" height="50px" />
                                    <img src={CSSLogo} width="50px" height="50px" />
                                    <img src={JSLogo} width="50px" height="50px" />
                                    <img src={ReactLogo} width="50px" height="50px" />
                                    <img src={IONLogo} width="50px" height="50px" />
                                    <img src={PTLogo} width="70px" height="50px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
            {/* <IonMenu side="end" type="push">
                    <IonHeader>
                        <IonToolbar color="danger">
                            <IonTitle>E kuy Fai Na hee</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonItem>E here</IonItem>
                        <IonItem>E sud</IonItem>
                        <IonItem>E Kuy</IonItem>
                    </IonContent>
                </IonMenu> */}
        </IonPage>
    </>
  )
}

export default Education