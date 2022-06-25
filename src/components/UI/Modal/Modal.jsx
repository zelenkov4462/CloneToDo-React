import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const rootClass = [styles.myModal];
  if (visible) {
    rootClass.push(styles.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClass.join(" ")}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.myModal__content}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
