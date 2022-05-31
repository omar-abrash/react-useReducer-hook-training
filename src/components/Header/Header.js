import React from "react";

import Navegation from "./Navegation/Navegation";
import styles from "./Header.module.css";

const Header = (props) => {
  const logOutHandler = (logOutState) => {
    props.onLogOut(logOutState);
  };

  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      {props.logInState && <Navegation onLogOut={logOutHandler} />}
    </header>
  );
};

export default Header;
