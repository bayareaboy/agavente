import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {askQuestion} from '../../../../../../actions/question'
import question from '../../../../../../reducers/question'

const QuestionForm = ({askQuestion}) => {
  const [title, setTitle] = useState('')

  const onSubmitClick = (e) => {
    e.preventDefault()
    askQuestion({title})
  }
  return (
    <div>
    <div class="container space-2">
    <div className=" text-center mx-lg-auto">
    <h3 className="mb-3 ">Ask Doctors Anything.</h3>
   
    </div>
    <form class="js-validate " onSubmit={onSubmitClick}>
      <div class="form-row">
        
  
     
  
        <div class="col-12 mb-sm-3">
          <div class="js-form-message form-group">
            <label class="input-label">Your question</label>
            <textarea class="form-control" rows="2" id="descriptionTextarea" placeholder="Please make your question as clear as possible." required
                      value={title} onChange={e => setTitle(e.target.value)}></textarea>
          </div>
        </div>
      </div>
  
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary btn-wide transition-3d-hover">Submit</button>
      </div>
    </form>
   
  </div>
    </div>
  )
}

QuestionForm.propTypes = {

}

export default QuestionForm
