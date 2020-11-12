import axios from 'axios'
import {setAlert} from './alert'
import {GET_QUESTIONS, QUESTION_ERROR, ASK_QUESTION} from './types'

// get questions

export const getQuestions = () => async dispatch => {
  try {
    const res = await axios.get('/api/questions')

    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}


// ASK Question

export const askQuestion = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/questions', config, formData)

    dispatch({
      type: ASK_QUESTION,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}