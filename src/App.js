import "./App.css";
import logo from "./static/images/google_maps.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="container">
      <div className="formContainer">
        <div className="logo">
          <img alt="Google Maps Logo" width="282" height="51.75" src={logo} />
        </div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
