import React from "react";
import styles from "./TaskBar.module.css";

const TaskItem = ({ item }) => {
  return (
    <li className={styles.li}>
      {item.done && (
        <div
          style={{ backgroundColor: "red", height: "10px", width: "10px" }}
        ></div>
      )}
      <b>{item.title}</b>
      <p>{item.description}</p>
    </li>
  );
};

export default TaskItem;
