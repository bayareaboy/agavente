import React from 'react'

const ExerciseItem = (props) => {
  return (
    <div>
   
    <div id="vimeoVideoPlayerExample1" class="video-player bg-dark">
    
      <img class="img-fluid video-player-preview" src={props.image} alt="Image" /> 
    
 
      <a class="js-inline-video-player video-player-btn video-player-centered" href={props.video}
         data-hs-video-player-options='{
           "videoType": "vimeo",
           "videoId": "167434033",
           "parentSelector": "#vimeoVideoPlayerExample1",
           "targetSelector": "#vimeoVideoIframeExample1",
           "isAutoplay": true,
           "isMuted": false,
           "classMap": {
             "toggle": "video-player-played"
           }
         }'>
        <span class="video-player-icon">
          <i class="fas fa-play"></i>
        </span>
      </a>
  
      <div class="embed-responsive embed-responsive-16by9">
        <div id="vimeoVideoIframeExample1"></div>
      </div>
      
    </div>

    </div>
  )
}

export default ExerciseItem
