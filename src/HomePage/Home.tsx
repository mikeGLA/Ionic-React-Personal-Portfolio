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

  const [biographyBut, setbiographyBut] = useState("")
  return (
    <IonApp>
      <IonPage>
        <IonHeader className="HomeNav-Flex">
            <div className="NavBiography"><p>Biography</p></div>
            <div className="NavEducate"><p>Education & Skill</p></div>
            <div className="NavExperience"><p>Experience</p></div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="HomeBody">
            <div className="Body-Index">
              <h1>welcome to my Portfolio</h1>
              <div className="MyPic">
                <img src={ProPic} width="350px" height="400px" />
              </div>
              <div className="IntroductionBox">
                <div className="IntroductionBox-Subject">
                  <div>Name:</div>
                  <div>Address:</div>
                  <div>Contacts</div>
                  <div>Git</div>
                </div>
                <div className="IntroductionBox-Data">
                  <div>Thanapol Chinkangwanwong (Mike)</div>
                  <div>95/1 Moo 3, Tambon Chaisatharn, Amphoe Saraphi, Chiang Mai, Thailand, 50140.</div>
                  <div>thanapol.chinkangwanwong@gmail.com / 0834784611</div>
                  <a href="https://github.com/mikeGLA" target="_blank" rel="noopener noreferrer">https://github.com/mikeGLA</a>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;
