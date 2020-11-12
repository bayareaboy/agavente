import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div class="container ">
          <div class="w-lg-80 mx-lg-auto">       
            <form class="input-group input-group-merge input-group-borderless">
              <div class="input-group-prepend">
                <span class="input-group-text" id="askQuestions">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <input type="search" class="form-control border" placeholder="Find answers" aria-label="Find answers" aria-describedby="askQuestions" />
            </form>
           
          </div>
        </div>
      
   
 
    </div>
  )
}

export default SearchBar
