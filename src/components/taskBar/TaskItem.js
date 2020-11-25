import React from "react";
import styles from "./TaskBar.module.css";

const TaskItem = ({ item }) => {
  return (
    <li className={styles.li}>
      <div className={styles.titleRow}>
        {item.done ? (
          <div className={styles.filledCheckbox}>
            <img
              src="green_mark.png"
              alt="greenMark"
              className={styles.image}
            />
          </div>
        ) : (
          <div className={styles.emptyCheckbox} />
        )}
        <b>{item.title}</b>
      </div>
      {item.subtasks.map((subtask) => (
        <ol>{subtask}</ol>
      ))}
    </li>
  );
};

export default TaskItem;
