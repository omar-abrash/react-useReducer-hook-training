import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./Navegation.module.css";
const Navegation = (props) => {
  const [logOutState, setLogOutState] = useState(false);

  const logOutHandler = () => {
    setLogOutState(true);
    props.onLogOut(logOutState);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <a href="/">User</a>
        </li>
        <li>
          <Button className={styles.btn} onClick={logOutHandler}>
            Log out
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navegation;
