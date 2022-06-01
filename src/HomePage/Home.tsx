import {
  IonApp,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import ProPic from "../img/propic.jpg"
import { useState } from "react";

const Home: React.FC = () => {

  // const [biographyBut, setbiographyBut]:any = useState("NavBiography-selected")
  // const [educateBut, seteducateBut] = useState("NavEducate")
  // const [experienceBut, setexperienceBut] = useState("NavExperience")
  return (
    <>
      <IonPage>
        {/* <IonHeader className="HomeNav-Flex">
            <button className={biographyBut} onClick={() => {setbiographyBut("NavBiography-selected"); seteducateBut("NavEducate"); setexperienceBut("NavExperience")}}><p>Biography</p></button>
            <button className={educateBut} onClick={()=> {setbiographyBut("NavBiography"); seteducateBut("NavEducate-selected"); setexperienceBut("NavExperience")}}><p>Education & Skill</p></button>
            <button className={experienceBut} onClick={()=> {setbiographyBut("NavBiography"); seteducateBut("NavEducate"); setexperienceBut("NavExperience-selected")}}><p>Experience</p></button>
        </IonHeader> */}
        <IonContent fullscreen>
          <div className="HomeBody">
            <div className="Body-Index">
              <h1>welcome to my Portfolio</h1>
              <div className="MyPic">
                <img width="350px" height="400px" />
              </div>
              <div className="IntroductionBox">
                <div className="IntroductionBox-Subject">
                  <div>Name:</div>
                  <div>Address:</div>
                  <div>Contacts</div>
                  <div>Git</div>
                </div>
                <div className="IntroductionBox-Data">
                  <div>Mr. Thanapol Chinkangwanwong (Mike)</div>
                  <div>95/1 Moo 3, Tambon Chaisatharn, Amphoe Saraphi, Chiang Mai, Thailand, 50140.</div>
                  <div>thanapol.chinkangwanwong@gmail.com / 0834784611</div>
                  <a href="https://github.com/mikeGLA" target="_blank" rel="noopener noreferrer">https://github.com/mikeGLA</a>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
