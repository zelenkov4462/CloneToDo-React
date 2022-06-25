import React from "react";
import styles from "./Select.module.scss";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={styles.select_sort}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled>{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
