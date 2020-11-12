import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Services from "./Services";
import Faq from "./Faq";
import Hero from './layout/Hero'


const Dashboard = ({ auth: { user } }) => {
  return (
    <div >
    <Hero name={user && user.name }/>
    {
      // 
    }
    
      <div class="container space-2">
        
        
       
       
        <Services />
        </div>
      
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(Dashboard);
