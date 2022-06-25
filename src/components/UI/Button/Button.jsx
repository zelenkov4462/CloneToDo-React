import React from "react";
import styles from "./Button.module.scss";

const Button = ({ cl, children, ...props }) => {
  return (
    <button className={styles[cl]} {...props}>
      {children}
    </button>
  );
};

export default Button;
