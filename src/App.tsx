import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonRoute, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './HomePage/Home';
import NavBar from './NavBar/NavBar';
import Education from './Education/Education';
import Experience from './Experience/Experience';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css'


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <NavBar/>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
        <Route exact path="/experience">
          <Experience/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
