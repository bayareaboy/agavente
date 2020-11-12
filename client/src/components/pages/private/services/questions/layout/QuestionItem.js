import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import question from '../../../../../../reducers/question'

const QuestionItem = ({auth, question: {_id, tags, title, user, answers, date}}) => {
  return (
    <div>
    <div class="container ">
    <div class="mb-11">
  
      <ul class="list-unstyled">
  
        <li class="mb-5">
          <div class="media align-items-center mb-2">
  
            <div class="media-body">
              <div class="d-flex justify-content-between align-items-center">
              {
                // <span class="h5 mb-0">Dave Austin</span>
              }
                
                <small class="text-muted">Asked <Moment fromNow>{date}</Moment></small>
              </div>
            </div>
          </div>
  
          <h4>{title}</h4>
         <p className="lead">Answers</p>

         <ul class="list-unstyled mt-5">
         
       
         {answers.map(answer =>   
          <li class="mb-5">
            <div class="border-left border-3 pl-4">
              <div class="media align-items-center mb-2">
                <div class="avatar avatar-circle mr-3">
                  <img class="avatar-img" src={answer.avatar === null ? "no profile image" : answer.avatar}  />
                </div>
                <div class="media-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="h5 mb-0">{answer.title} {answer.name} {" "}</span>
                    <small class="text-muted"><Moment fromNow>{answer.date}</Moment></small>
                  </div>
                </div>
              </div>
      
              <p>{answer.text}</p>
      
             
            </div>
          </li>)}

       </ul>
           
        </li>
        
  
      </ul>
    </div>
  </div>
    </div>
  )
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  
})

export default connect(mapStateToProps, {})(QuestionItem)
