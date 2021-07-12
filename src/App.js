import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { useState } from 'react';

/* COMPONENTS */
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import Modal from './components/Modal/Modal';

/* PAGES */
import Homepage from './pages/Homepage';
import Cookies from './pages/Cookies';
import Privacy from './pages/Privacy';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const modalStateHandler = property => {
    setModalOpen(property);
  }

  return (
    <Router>
      {modalOpen && <Modal onClose={() => modalStateHandler(false)}/>}
      <main className="wrapper">
        <Navigation onModalOpen={() => modalStateHandler(true)}/>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>
          <Route path="/home" exact>
            <Homepage onModalOpen={() => modalStateHandler(true)}/>
          </Route>
          <Route path="/users" exact>
            Users
          </Route>
          <Route path="/cookies-policy" exact>
            <Cookies />
          </Route>
          <Route path="/privacy-policy" exact>
            <Privacy/>
          </Route>
        </Switch>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
