import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({type,artistNumberItems,songsNumberItems}) => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
     
     {type ==="artist" || type === undefined ?(
        <ItemList
        title="Artistas"
        items={artistNumberItems}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
     )
      :
    ( <></>)}


      {/* Item List de Músicas */}
      
      {type ==="songs" || type === undefined ? (
        <ItemList
        title="Músicas"
        items={songsNumberItems}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />)
      :
      (<></>)}

    </div>
  );
};

export default Main;
