import "./Experience.css"
import React from 'react'
import { IonContent, IonPage } from "@ionic/react"

const Experience = () => {
  return (
    <IonPage>
        <IonContent fullscreen>
            <div className="Experience-Index">
                <div className="Experience-Body">
                    <h1>My Working Experience</h1>
                    <div className="WorkTimeline-Index">
                        <div className="PTTimeline-Index">
                            <div className="PTTimeline-Body">
                                <div>Physical Therapist Experience</div>
                                <ul>Internship Experience
                                    <hr />
                                    <li>Maharaj Hospital
                                        <ul>
                                            <li>Orthopedic Field</li>
                                            <li>Neuropathy Field</li>
                                            <li>Infant Field</li>
                                            <li>Chest Field</li>
                                            <li>Elder Field</li>
                                        </ul>  
                                    </li>
                                    <hr />
                                    <li>Sermngam Hospital
                                        <ul>
                                            <li>Orthopedic Field</li>
                                            <li>Neuropathy Field</li>
                                            <li>Public Health Field</li>
                                        </ul>
                                    </li>
                                    <hr/>
                                    <li>SriSangWon Hospital
                                        <ul>
                                            <li>Orthopedic Field</li>
                                            <li>Neuropathy Field</li>
                                            <li>Public Health Field</li>
                                        </ul>
                                    </li>
                                    <hr />
                                    <li>MaeSot Hospital
                                        <ul>
                                            <li>Orthopedic Field</li>
                                            <li>Neuropathy Field</li>
                                            <li>Public Health Field</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>Working Experience
                                    <hr />
                                    <li>Freelancer
                                        <ul>
                                            <li>20 Patients In past 3 Years</li>
                                        </ul>
                                    </li>
                                    <hr />
                                    <li>Part Timer
                                        <ul>
                                            <li>Ban Phak Jai Nursing Home</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="CodingTimeline-Index">
                            <div>Developer Experience</div>
                            <ul>Thai Agro Innovative, Ltd.
                                <hr />
                                <li>Front-End Developer
                                    <ul><li>Web Application for Farmer Boi</li></ul>
                                </li>
                            </ul>
                        </div>
                        <div className="FreelancerTimeline-Index">
                            <div>Freelancer Experience</div>
                            <hr />
                            <ul>
                                <li>English To Thai Translation
                                    <ul>
                                    <li>General Conversation</li>
                                    <li>Exercise Instruction</li>
                                    <li>Website Content</li>
                                    <li>Product Description</li>
                                    <li>Random Stuff On The Internet</li>
                                    </ul>
                                </li>
                            </ul>
                            <hr />
                            <ul>
                                <li>Thai Audio Transcription</li>
                                <ul>
                                    <li>LOFT Platform Version 1 and 2</li>
                                </ul>
                            </ul>
                            <hr />
                            <ul>
                                <li>System Tester</li>
                                <ul>
                                    <li>Payment System</li>
                                </ul>
                            </ul>
                            <hr />
                            <ul>
                                <li>Personal & Virtual Assistance</li>
                                <ul>
                                    <li>Divorce Issue</li>
                                    <li>Land Document</li>
                                    <li>General Assistance</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Experience