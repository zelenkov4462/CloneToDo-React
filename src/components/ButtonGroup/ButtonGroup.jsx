import React from "react";
import styles from "./ButtonGroup.module.scss";
import Button from "../UI/Button/Button";

const ButtonGroup = ({ selectFilter }) => {
  return (
    <div>
      <Button onClick={() => selectFilter("All")} cl="btn_select">
        Все
      </Button>
      <Button onClick={() => selectFilter("Checked")} cl="btn_select">
        Выполненные
      </Button>
      <Button onClick={() => selectFilter("Unchecked")} cl="btn_select">
        Не выполненные
      </Button>
      <Button onClick={() => selectFilter("Liked")} cl="btn_select">
        Избранные
      </Button>
    </div>
  );
};

export default ButtonGroup;
