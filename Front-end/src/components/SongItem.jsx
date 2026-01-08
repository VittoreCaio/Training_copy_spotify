import React from 'react'
import { Link } from 'react-router-dom'


const SongItem = ({duration,image,name,id,index,items}) => {
  return (
    <Link to={`/song/${id}`} className='song-item'>  
      <div className="song-item__number-album"> 
        <p>{index + 1}</p>

        


        <div className='song-item__album'>  
            <img className="song-item__image" src={image} alt="MusicImage" />
            
            <p className="song-item__name">{name}</p>

        </div>

      </div>

        <p>{duration}</p>
    </Link>
  )
}

export default SongItem