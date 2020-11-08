import logo from './logo.svg';
import './App.css';
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
