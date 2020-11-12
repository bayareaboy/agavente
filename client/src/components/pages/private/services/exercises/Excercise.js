import React from 'react'
import {Link} from 'react-router-dom'

const Excercise = () => {
  return (
    <div>
 
    <div class="container space-3">
 
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2>Excercise Library</h2>
        <p className="lead">Thoughtfully designed excercises to make you feel your best.</p>
        <br/>
        <h4>All Categories</h4>
      </div>
    
    
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
      
          <Link class="card bg-soft-danger shadow min-h-250rem h-0 transition-3d-hover p-5" to="/excercises-lower-back-pain">
            <div class="mb-4">
              <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
            </div>

            <div class="mt-auto">
              <h3 class="h2">Lower Back Pain</h3>
              <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </Link>
         
        </div>
        <div class="col-md-4  mb-3 mb-md-0">
      
        <Link class="card bg-soft-primary shadow min-h-250rem h-100 transition-3d-hover p-5" to="/excercises-neck-pain">
          <div class="mb-4">
            <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
          </div>

          <div class="mt-auto">
            <h3 class="h2">Neck pain</h3>
            <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
          </div>
        </Link>
       
      </div>
      <div class="col-md-4  mb-3 mb-md-0">
      
      <Link class="card bg-soft-success shadow min-h-250rem h-100 transition-3d-hover p-5" to="/excercises-shoulder-pain">
        <div class="mb-4">
          <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
        </div>

        <div class="mt-auto">
          <h3 class="h2">Shoulder pain</h3>
          <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
        </div>
      </Link>
     
    </div>

      </div>
      <br/>
      <div className="row">
     
      <div class="col-md-4  mb-3 mb-md-0">
      
      <Link class="card bg-soft-warning shadow min-h-250rem h-100 transition-3d-hover p-5" to="/excercises-knee-pain">
        <div class="mb-4">
          <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
        </div>

        <div class="mt-auto">
          <h3 class="h2">Knee pain</h3>
          <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
        </div>
      </Link>
     
    </div>
    <div class="col-md-4  mb-3 mb-md-0">
      
    <Link class="card bg-soft-info shadow min-h-250rem h-100 transition-3d-hover p-5" to="/excercises-elbow-pain">
      <div class="mb-4">
        <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
      </div>

      <div class="mt-auto">
        <h3 class="h2">Elbow pain</h3>
        <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
      </div>
    </Link>
   
  </div>
  <div class="col-md-4  mb-3 mb-md-0">
      
      <Link class="card bg-soft-navy shadow min-h-250rem h-100 transition-3d-hover p-5" to="/excercises-ankle-pain">
        <div class="mb-4">
          <span class="d-block small text-danger font-weight-bold text-cap mb-2">Original content</span>
        </div>

        <div class="mt-auto">
          <h3 class="h2">Ankle pain</h3>
          <span class="text-danger">Start <i class="fas fa-angle-right fa-sm ml-1"></i></span>
        </div>
      </Link>
    
    </div>
      </div>
    </div>
   
    </div>
  )
}

export default Excercise
