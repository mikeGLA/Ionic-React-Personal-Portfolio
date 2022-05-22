import { IonContent, IonHeader, IonPage } from '@ionic/react'
import React from 'react'
import { useState } from 'react'
import "./NavBar.css"


export const NavBar = () => {

    const [biographyBut, setbiographyBut]:any = useState("NavBiography-selected")
    const [educateBut, seteducateBut] = useState("NavEducate")
    const [experienceBut, setexperienceBut] = useState("NavExperience")

  return (
    <IonPage>
        <IonContent>
            <IonHeader className="HomeNav-Flex">
                <button className={biographyBut} onClick={() => {setbiographyBut("NavBiography-selected"); seteducateBut("NavEducate"); setexperienceBut("NavExperience")}}><p>Biography</p></button>
                <button className={educateBut} onClick={()=> {setbiographyBut("NavBiography"); seteducateBut("NavEducate-selected"); setexperienceBut("NavExperience")}}><p>Education & Skill</p></button>
                <button className={experienceBut} onClick={()=> {setbiographyBut("NavBiography"); seteducateBut("NavEducate"); setexperienceBut("NavExperience-selected")}}><p>Experience</p></button>
            </IonHeader>
        </IonContent>
    </IonPage>
  )
}
