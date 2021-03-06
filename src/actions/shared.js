import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const handleInitialData = () => {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
