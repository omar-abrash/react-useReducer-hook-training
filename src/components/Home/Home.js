import React from "react";

import Container from "../UI/Container/Container";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <main>
      <Container>
        <Card className={styles.card}>
          <h2>Welcome, you are loggIn Now!!</h2>
        </Card>
      </Container>
    </main>
  );
};

export default Home;
