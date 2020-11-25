import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import styles from "./TaskBar.module.css";

const TaskBar = () => {
  const location = window.location.pathname;
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className={styles.task_bar}>
      {location !== "/welcome" && (
        <Fragment>
          <h2 className={styles.heading}>To-Do</h2>
          <ol className={styles.ol}>
            {tasks.map((task) => (
              <TaskItem key={task.id} item={task} />
            ))}
          </ol>
        </Fragment>
      )}
    </div>
  );
};

export default TaskBar;
