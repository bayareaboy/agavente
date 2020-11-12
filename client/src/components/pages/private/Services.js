import React from 'react'
import {Link} from 'react-router-dom'
const Services = () => {
  return (
    <div>
    
    <div class="container">
     <h3 className='text-center'>Service Center</h3>
     
    
      <div class="row mx-n2">
        <div class="col-sm-6 col-lg-3 px-2 mb-3 mb-lg-0">
        
          <Link class="card h-100 transition-3d-hover" to="/private-my-exercices">
            <div class="card-body">
              <figure class="w-100 max-w-8rem mb-4">
                <img class="img-fluid" src="/dist/svg/icons/icon-3.svg" alt="SVG" />
              </figure>
              <h4>Exercises</h4>
              <p class="font-size-1 text-body mb-0">Find perfect exercises to manage your pain and improve your strength.</p>
            </div>
            <div class="card-footer border-0 pt-0">
              <span class="font-size-1">Start<i class="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </Link>
          
        </div>
    
        <div class="col-sm-6 col-lg-3 px-2 mb-3 mb-lg-0">
        
          <a class="card h-100  link-underline" href="#">
            <div class="card-body">
              <figure class="w-100 max-w-8rem mb-4">
                <img class="img-fluid" src="/dist/svg/icons/icon-41.svg" alt="SVG" />
              </figure>
              <h4>Live Exercise Studio <span class="badge badge-success badge-pill ">Coming soon</span></h4>
              <p class="font-size-1 text-body mb-0">Exercise and improve your health live with professional coaches.</p>
            </div>
            <div class="card-footer border-0 pt-0">
              <span class="font-size-1">Coming soon <i class="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>
        
        </div>
    
        <div class="col-sm-6 col-lg-3 px-2 mb-3 mb-sm-0">
         
          <a class="card h-100 transition-3d-hover" href="#">
            <div class="card-body">
              <figure class="w-100 max-w-8rem mb-4">
                <img class="img-fluid" src="/dist/svg/icons/icon-4.svg" alt="SVG" />
              </figure>
              <h4>Talk to a doctor </h4>
              <p class="font-size-1 text-body mb-0">Talk to hundreds of doctors instantly. No wait lines and applications.</p>
            </div>
            <div class="card-footer border-0 pt-0">
              <span class="font-size-1">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>
        
        </div>
    
        <div class="col-sm-6 col-lg-3 px-2">
         
          <a class="card h-100 transition-3d-hover" href="#">
            <div class="card-body">
              <figure class="w-100 max-w-8rem mb-4">
                <img class="img-fluid" src="/dist/svg/icons/icon-12.svg" alt="SVG" />
              </figure>
              <h4>Education</h4>
              <p class="font-size-1 text-body mb-0">Educate yourself about musculoskeletal pain and learn to avoid them and stay healthy.</p>
            </div>
            <div class="card-footer border-0 pt-0">
              <span class="font-size-1">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>
         
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default Services
