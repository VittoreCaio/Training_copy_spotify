import React from 'react'
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faShuffle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {songsArray} from "../assets/database/songs.js";
import { useState } from 'react';

const player = ({duration,songObjId,nextMusicId,backMusicId,active,setActive}) => {
 

  return (
      <div className='player'>

      <div className='player__controllers'>

        <FontAwesomeIcon  icon={faShuffle} 
        className={`player__icon ${active ? "player__icon--active" : ""}`}
      onClick={() => setActive(prev => !prev)}/>

        <Link to={`/song/${backMusicId.id}`}>
            <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

                <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
       
        <Link to={`/song/${nextMusicId.id}`}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
                



   </div>


      <div className='player__progress'>
        <p> 00:00</p>

        <div className='player__bar'>
          <div className='player__bar-progress'></div>
        </div>
        <p>{duration}</p>
      </div>

      </div>

    )
}

export default player