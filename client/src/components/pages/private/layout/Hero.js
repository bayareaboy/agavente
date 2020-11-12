import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'


const Hero = (props) => {
  return (
    <div className='space-top-2 bg-light'>
   
    <div className="bg-light space-2" >
      <div className="container space-lg-0">
        <div className=" text-center mx-lg-auto">
          <h3 className="mb-3 ">Hello {props.name}</h3>
          <p className="lead mb-3">How are you feeling today ?</p> 
        
          <SearchBar />
          <br/>
        <Link to="/ask-question" className="btn btn-pill btn-primary btn-sm">Ask doctors a question</Link> <a href="callto:911" className="btn secondary btn-sm">For urgent help, call 911.</a>
          </div>
      </div>
    </div>
   
    </div>
  )
}

export default Hero
