import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useRaf } from "react-use";
import { setVisibility } from "./botSlice";
import styles from "./ChatBot.module.css";

const START_POS = -290;
const END_POS = 40;

const ChatBot = ({ dialogue }) => {
  const dispatch = useDispatch();
  const progress = useRaf(800);
  const offset = (START_POS + (END_POS - START_POS) * progress).toFixed();

  const handleDismiss = () => {
    dispatch(setVisibility({ visible: false }));
  };

  return (
    <Fragment>
      {progress === 1 && (
        <div className={styles.bubble} onClick={handleDismiss}>
          {dialogue.map((text) => (
            <p className={styles.dialogue}>{text}</p>
          ))}
        </div>
      )}
      <img
        onClick={handleDismiss}
        src={process.env.PUBLIC_URL + "linda.png"}
        alt="linda"
        className={styles.image}
        style={{ right: offset + "px" }}
      />
    </Fragment>
  );
};

export default ChatBot;
