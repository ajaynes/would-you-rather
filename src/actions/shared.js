import { getInitialData } from "../utils/api.js";
import { receiveUsers } from "./users";
import { loginAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return dispatch => {
    getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
