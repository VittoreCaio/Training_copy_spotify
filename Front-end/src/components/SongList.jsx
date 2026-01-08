import React from 'react'
import SongItem from './SongItem'
import { useState } from 'react';

//variavel de estado, renderizações e usestate

const SongList = ({songsArray}) => {
let [items, setItems] = useState(5);

  return (
    <div className='song-list'> 
      
<>


        {songsArray.filter((currentobj, index)=> index < items)
        .map((currentSongObj,index) => (
          <SongItem{...currentSongObj} index={index}key={index}/>
          ))}





      </>  

      <p className='song-list__see-more' onClick={()=> {setItems (items + Infinity)}}>Ver mais</p>

      </div>   
    
    ) 

}

export default SongList