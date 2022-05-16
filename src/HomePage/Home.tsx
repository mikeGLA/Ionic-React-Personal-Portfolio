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

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonContent className="HomeIndex" fullscreen>
          <IonHeader className="HomeNav-Flex">
            <div>Biography</div>
            <div>Education & Skill</div>
            <div>Experience</div>
          </IonHeader>
          <h1>welcome to my Portfolio</h1>
          <div className="HomeBody">
            <div className="MyPic">
              <img src={ProPic} width="350px" height="400px" />
            </div>
            <div></div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;
