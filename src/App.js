import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import LogInForm from "./components/LogInForm/LogInForm";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const userDataHandler = (userName, passWord) => {
    // console.log("In App", userName, passWord);
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const logOutHandler = (logOutState) => {
    setIsLoggedIn(logOutState);
    localStorage.removeItem("loggedIn");
  };

  return (
    <React.Fragment>
      <Header logInState={isLoggedIn} onLogOut={logOutHandler} />
      {!isLoggedIn && <LogInForm afterEnteredData={userDataHandler} />}
      {isLoggedIn && <Home />}
    </React.Fragment>
  );
}

export default App;
