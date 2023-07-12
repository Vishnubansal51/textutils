import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - dark mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="vishnu"
          aboutText=" about "
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert = {showAlert} heading ="enter the text to analyze" mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
