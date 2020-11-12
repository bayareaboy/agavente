import React, { useState, useEffect } from "react";
import Booking from './inpersonpt/Booking'
import ReactPlayer from "react-player";

const D = () => {

  return (
    <div className="space-3">
     <Booking />
     <ReactPlayer
  url="https://www.youtube.com/embed/r0YPKxL4ugc"
  playing={true}
  width="1600"
  height="1400"
/>
    </div>
  );
};

export default D;
