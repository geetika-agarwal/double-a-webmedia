import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarSection from "./components/NavbarSection";
import SidebarSection from "./components/SidebarSection";
import Home from "./pages";
import Careers from "./pages/careers";
import Customize from "./pages/customize";
import ourwork from "./pages/ourwork";
import Pricing from "./pages/pricing";
import contact from "./pages/contact";
import FrontEndComponent from "./components/FrontendComponent";
import BackEndComponent from "./components/BackendComponent";
import FullStack from "./components/FullStackComponent";
import ProjectLeaderComponent from "./components/ProjectLeaderComponent";
import TesterComponet from "./components/TesterComponents";
import PaymentBronze from "./pages/payment-bronze-pack";
import PaymentSilver from "./pages/payment-silver-pack";
import PaymentGold from "./pages/payment-gold-pack";
import ScrolltoTop from "./components/ScrollToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <NavbarSection toggle={toggle} />
        <SidebarSection isOpen={isOpen} toggle={toggle} />
        <ScrolltoTop />
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact-us" component={contact} exact />
          <Route path="/our-work" component={ourwork} />
          <Route path="/careers" component={Careers} />
          <Route path="/customize-your-page" component={Customize} />
          <Route path="/frontend" component={FrontEndComponent} />
          <Route path="/backend" component={BackEndComponent} />
          <Route path="/fullstack" component={FullStack} />
          <Route path="/project-leader" component={ProjectLeaderComponent} />
          <Route path="/testing" component={TesterComponet} />
          <Route path="/payment-bronze-pack" component={PaymentBronze} />
          <Route path="/payment-silver-pack" component={PaymentSilver} />
          <Route path="/payment-gold-pack" component={PaymentGold} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
