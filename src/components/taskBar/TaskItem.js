import React from "react";
import styles from "./TaskBar.module.css";

const TaskItem = ({ item }) => {
  return (
    <li className={styles.li}>
      {item.done && (
        <div>
          <img src="green_mark.png" alt="greenMark" className={styles.image} />
        </div>
      )}
      <b>{item.title}</b>
      <ul>{item.subtask1}</ul>
      <ul>{item.subtask2}</ul>
      <ul>{item.subtask3}</ul>
      <ul>{item.subtask4}</ul>
    </li>
  );
};

export default TaskItem;
