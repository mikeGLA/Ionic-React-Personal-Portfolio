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
                        <div className="PTTimeline"></div>
                        <div className="CodingTimeline"></div>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Experience