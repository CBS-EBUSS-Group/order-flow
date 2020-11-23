import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import styles from "./TaskBar.module.css";

const TaskBar = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className={styles.task_bar}>
      <h2>Tasks</h2>
      <ol>
        {tasks.map((task) => (
          <TaskItem key={task.id} item={task} />
        ))}
      </ol>
    </div>
  );
};

export default TaskBar;
