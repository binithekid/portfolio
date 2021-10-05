import "./App.css";
//Components
import Input from "./components/Intro/Input";
import PortfolioHome from "./components/Portfolio/PortfolioHome";
//React Router
import { useLocation, Route, Switch } from "react-router-dom";
//Framer-Motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='content'>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <Input />
          </Route>
          <Route path='/portfolio'>
            <PortfolioHome />
          </Route>
        </Switch>
      </div>
    </AnimatePresence>
  );
}

export default App;
