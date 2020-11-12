import React from 'react'

const PersonalInfo = ({formData, setForm, navigation}) => {
  const { fullName, streetAddress, apt, city, state } = formData;
  return (
    <div className="space-1 col-md-6 container">
      <form onSubmit={() => navigation.next()}>
      <div class="border-bottom pb-7 mb-7">
      <div class="mb-4">
      <h2 class="h3">Personal Information</h2>
    </div>
    <div className="row">
    <div class="col-md-12 mb-3 mb-sm-6">
    <div class="js-form-message">
    <label class="input-label">Full name</label>
    <input type="text" class="form-control" name="fullName" placeholder="Brad Pitt" required
           data-msg="Please enter your first name."   
           value={fullName}
           onChange={setForm} />
  </div>

    </div>

    
    <div class="w-100"></div>
    <div class="col-md-8 mb-3 mb-sm-6">
    <div class="js-form-message">
    <label class="input-label">Street Address</label>
    <input type="text" class="form-control" name="streetAddress" placeholder="100 Townsend st."  required
           data-msg="Please enter your street address."   
           value={streetAddress}
           onChange={setForm} />
  </div>
  </div>
  <div class="col-md-4 mb-3 mb-sm-6">
  <div class="js-form-message">
  <label class="input-label">Apt/Suite</label>
  <input type="text" class="form-control" name="apt" placeholder="Apt 23"  
         
         value={apt}
         onChange={setForm} />
</div>

    </div>
    <div class="w-100"></div>
    <div class="col-md-8 mb-3 mb-sm-6">
    <div class="js-form-message">
    <label class="input-label">City</label>
    <input type="text" class="form-control" name="city" placeholder="San Francisco"  required
           data-msg="Please enter your city."   
           value={city}
           onChange={setForm} />
  </div>
  </div>
  <div class="col-md-4 mb-3 mb-sm-6">
  <div class="js-form-message">
  <label class="input-label">State</label>
  <input type="text" class="form-control" name="state" placeholder="CA"  required
         data-msg="Please enter your state."   
         value={state}
         onChange={setForm} />
</div>

    </div>
    <div class="d-flex justify-content-between align-items-center">
    <button type="submit" class="ml-2 btn btn-primary btn-pill transition-3d-hover">Continue</button>
  </div>
      </div>
      </div>
      </form>
    
    </div>
  )
}

export default PersonalInfo

