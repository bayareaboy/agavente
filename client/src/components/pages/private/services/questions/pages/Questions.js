import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getQuestions} from '../../../../../../actions/question'
import Spinner from '../../../../../layout/Spinner'
import Hero from '../layout/Hero'
import QuestionItem from '../layout/QuestionItem'
import AnswerItem from '../layout/AnswerItem'
import question from '../../../../../../reducers/question'

const Questions = ({getQuestions, question: {questions, loading}, match}) => {
        useEffect(()=> {
          getQuestions(match.params.id);

        }, [getQuestions] )
  return loading || questions === null ? <Spinner /> : 
  
  <Fragment>
          <div className="container space-1">
           <h2>All questions</h2> 
           <div className="questions">
         
           {questions.map(question => (
             <QuestionItem key={question._id} question={question}/>
           ))}
          {
          //  {questions.answers.map(answer => (
          //    <AnswerItem key={answer._id} answer={answer} />
          //  ))}
        }
           </div>
          </div>
  
  </Fragment>
}

Questions.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  question: state.question
})

export default connect(mapStateToProps, {getQuestions})(Questions)

