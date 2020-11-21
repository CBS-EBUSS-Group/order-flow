import React from "react";
import styles from "./TaskBar.module.css";

const TaskBar = () => {
  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
    </div>
  );
};

export default TaskBar;
