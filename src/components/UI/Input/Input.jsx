import React from "react";
import styles from "./Input.module.scss";

const Input = ({ cl, ...props }) => {
  return <input className={styles[cl]} {...props} />;
};

export default Input;
