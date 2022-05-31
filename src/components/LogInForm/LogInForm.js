import React, { useState, useEffect, useReducer } from "react";

import Container from "../UI/Container/Container";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./LogInForm.module.css";

const userNameReducerFn = (state, action) => {
  if (action.type === "USER_NAME_INPUT") {
    // console.log("Character changing!");
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === "USER_NAME_BLUR") {
    // console.log("Blur is happend!");
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  return { value: "", isValid: null };
};

const userPassWordReducerFn = (state, action) => {
  if (action.type === "USER_PASSWORD_INPUT") {
    // console.log("Character changing!");
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === "USER_PASSWORD_BLUR") {
    // console.log("Blur is happend!");
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  if (
    action.type === "CLEAR_USERNAME_INPUT" ||
    action.type === "CLEAR_PASSWORD_INPUT"
  ) {
    return { value: "", isValid: null };
  }
  return { value: "", isValid: null };
};

const LogInForm = (props) => {
  // we need replace these useStates to useReducer

  // const [userName, setUserName] = useState("");
  // const [userPassWord, setUserPassWord] = useState("");
  // const [userNameValidety, setUserNameValidety] = useState(null);
  // const [userPassWordValidety, setUserPassWordValidety] = useState(null);

  const [formValidation, setFormValidation] = useState(false);

  // reducer state for userName input filed
  const [userNameState, userNameAction] = useReducer(userNameReducerFn, {
    value: "",
    isValid: null,
  });

  // reducer state for passWord input filed
  const [userPassWordState, userPassWordAction] = useReducer(
    userPassWordReducerFn,
    {
      value: "",
      isValid: null,
    }
  );

  useEffect(() => {
    let formValidationChicker = setTimeout(() => {
      console.log("useEffect Hook!");
      setFormValidation(userNameState.isValid && userPassWordState.isValid);
    }, 500);
    return () => {
      console.log("Clean!");
      clearTimeout(formValidationChicker);
    };
  }, [userNameState.isValid, userPassWordState.isValid]);

  const userNameChangeHandler = (event) => {
    userNameAction({ type: "USER_NAME_INPUT", val: event.target.value });
    // setFormValidation(
    //   event.target.value.trim().length > 5 && userPassWordState.isValid
    // );
  };

  const passWordChangeHandler = (event) => {
    userPassWordAction({
      type: "USER_PASSWORD_INPUT",
      val: event.target.value,
    });
    // setFormValidation(
    //   event.target.value.trim().length > 5 && userNameState.isValid
    // );
  };

  const userNameBlurHandler = () => {
    userNameAction({ type: "USER_NAME_BLUR" });
  };
  const passWordBlurHandler = () => {
    userPassWordAction({ type: "USER_PASSWORD_BLUR" });
  };

  const formDataHandler = (event) => {
    event.preventDefault();
    props.afterEnteredData(userNameState.value, userPassWordState.value);

    userNameAction({ type: "CLEAR_USERNAME_INPUT" });
    userPassWordAction({ type: "CLEAR_PASSWORD_INPUT" });
  };

  return (
    <main>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <form className={styles.form} onSubmit={formDataHandler}>
            <div>
              <label htmlFor="userName">User Name</label>
              <input
                id="userName"
                type="text"
                onChange={userNameChangeHandler}
                onBlur={userNameBlurHandler}
                value={userNameState.value}
                className={
                  userNameState.isValid === null ||
                  userNameState.isValid === true
                    ? ""
                    : styles["not-valid"]
                }
                placeholder="At Least Six Character"
              />
            </div>
            <div>
              <label htmlFor="passWord">Password</label>
              <input
                id="passWord"
                type="password"
                onChange={passWordChangeHandler}
                onBlur={passWordBlurHandler}
                value={userPassWordState.value}
                className={
                  userPassWordState.isValid === null ||
                  userPassWordState.isValid === true
                    ? ""
                    : styles["not-valid"]
                }
                placeholder="At Least Six Character"
              />
            </div>
            <div>
              <Button
                className={styles.btn}
                type={"submit"}
                disabled={!formValidation}
              >
                Log In
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </main>
  );
};

export default LogInForm;
