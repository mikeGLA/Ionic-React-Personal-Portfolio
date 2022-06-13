import { IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'
import React from 'react'
import { useState } from 'react'
import "./NavBar.css"


const NavBar = () => {

    const [biographyBut, setbiographyBut]:any = useState("NavBiography-selected")
    const [educateBut, seteducateBut] = useState("NavEducate")
    const [experienceBut, setexperienceBut] = useState("NavExperience")

    const bioclick =()=>{
      setbiographyBut("NavBiography-selected"); 
      seteducateBut("NavEducate"); 
      setexperienceBut("NavExperience")
    }
    const educateclick =()=>{
      setbiographyBut("NavBiography"); 
      seteducateBut("NavEducate-selected"); 
      setexperienceBut("NavExperience")
    }
    const experienceclick =()=>{
      setbiographyBut("NavBiography"); 
      seteducateBut("NavEducate"); 
      setexperienceBut("NavExperience-selected")
    }
  return (
    <IonHeader className="HomeNav-Flex">
      <IonButton routerLink="/home" className={biographyBut} onClick={bioclick}><p>Biography</p></IonButton>
      <IonButton routerLink='/education' className={educateBut} onClick={educateclick}><p>Education & Skill</p></IonButton>
      <IonButton routerLink='/experience' className={experienceBut} onClick={experienceclick}><p>Experience</p></IonButton>
    </IonHeader>
  )
}

export default NavBar;