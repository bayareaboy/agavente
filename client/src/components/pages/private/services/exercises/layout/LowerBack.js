import React, { Component } from 'react'
import ExcerciseItem from '../layout/utilities/ExerciseItem'

class LowerBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      excercises: []
    }
  }

  render() {
    return (
      <div>
        <ExcerciseItem />
      </div>
    )
  }
}
export default LowerBack