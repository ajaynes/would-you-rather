import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { handleInitialData } from "./shared"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

const addUserAnswer = (authedUser, qid, answer) => {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export const handleAddUserAnswer = answerinfo => {
  return dispatch => {
    return saveQuestionAnswer({
      ...answerinfo
    })
      .then(() => dispatch(handleInitialData(answerinfo.authedUser)))
  }
}

const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
}

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(() => {
        dispatch(addQuestion(optionOneText, optionTwoText, author))
        dispatch(handleInitialData())
      })
  }
}
