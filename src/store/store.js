import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import tasksReducer from "../components/taskBar/taskSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});
