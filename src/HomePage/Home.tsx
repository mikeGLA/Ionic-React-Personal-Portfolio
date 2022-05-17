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
        <IonHeader className="HomeNav-Flex">
            <div>Biography</div>
            <div>Education & Skill</div>
            <div>Experience</div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="HomeBody">
            <div className="Body-Index">
              <h1>welcome to my Portfolio</h1>
              <div className="MyPic">
                <img src={ProPic} width="350px" height="400px" />
              </div>
              <div className="Introduction-Box">
                <div>aa</div>
                <div>bb</div>
                <div>cc</div>
                <div>dd</div>
                <div>ee</div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;
