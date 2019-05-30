import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addUserAnswer(authedUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleAddUserAnswer(info) {
  return dispatch => {
    dispatch(addUserAnswer(info));
    return saveQuestionAnswer(info).catch(e => {
      console.warn("Error in handleAddUserAnswer: ", e);
      dispatch(addUserAnswer(info));
      alert("The was an error adding your answer. Try again.");
    });
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}
