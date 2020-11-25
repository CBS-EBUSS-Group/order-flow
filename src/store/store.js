import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import tasksReducer from "../components/taskBar/taskSlice";
import accountReducer from "../components/account/accountSlice";
import depotReducer from "../components/depot/depotSlice";
import basketReducer from "./basketSlice";
import botReducer from "../components/chatbot/botSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    account: accountReducer,
    depot: depotReducer,
    basket: basketReducer,
    bot: botReducer,
  },
});
