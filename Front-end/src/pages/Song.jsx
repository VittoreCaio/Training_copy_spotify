import React from 'react';
import Player from "../components/Player"
import { Link,useParams } from 'react-router-dom';
import {songsArray} from "../assets/database/songs.js";
import {artistArray} from    "../assets/database/artists.js";
import { useState } from 'react';

const song = () => {

const {id} = useParams();


const songObj = songsArray.filter((currentSongObj) =>  currentSongObj.id === Number(id))[0];  //name of the current artist
const artistobj = artistArray.filter((currentArtistObj)=> currentArtistObj.name === songObj.artist)[0];

// ----------------3º array somente do artista que está tocando------------------------
const artistMusics = songsArray.filter((currentArtistMusic) => currentArtistMusic.artist === songObj.artist); 

//-----------------O shuffle está ativo------------------------
const [active, setActive] = useState(false);   
// console.log(active)




//-------------------------------------------------------------------------------FORWARD BUTTON--------------------------------------------------
//idinterno+1-->next name-->nextid

let artistMusicsNextMusicIndex = active ?        //se shuffle estiver ativo usa o random caso contrario passamos o idInterno + 1
Math.floor(Math.random()*artistMusics.length) :
artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) + 1;  //id interno + 1






// //teste
// const teste = artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) == artistMusicsNextMusicIndex;
// console.log(teste)

//-----------------Proteção para que random não escolha a musica atual-----------------
if ( artistMusicsNextMusicIndex == Number(artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name)) )
  {artistMusicsNextMusicIndex+=1} 
else{artistMusicsNextMusicIndex = artistMusicsNextMusicIndex}      //caso o random devolva a mesma música faz-se um novo random caso contrario manten-se o valor

//-----------------TESTE PARA VER SE A PROTEÇÃO DEU CERTO-----------------
// const teste2 = artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) == artistMusicsNextMusicIndex;
// console.log(teste2)





//-----------------proteção de resto para quando artistMusicsNextMusicIndex passar de 9-----------------
let restoArtistMusicsNextMusicIndex = artistMusicsNextMusicIndex % artistMusics.length

//-----------------nome da proxima -----------------
const nextMusicName = artistMusics.filter((currentArtistMusic,index) => index === restoArtistMusicsNextMusicIndex)[0]; 

//-----------------Passando o ID da música a ser escolhida no next pegando o nome da música e artista como chave pois tem artistas como músicas iguais-----------------
const nextMusicId = songsArray.filter((currentMusic) =>currentMusic.name === nextMusicName.name && currentMusic.artist === nextMusicName.artist)[0];






//----------------------------------------------------------BACK BUTTON-------------------------------------------------------

//-----------------Descobrindo id interno - 1-----------------
let artistMusicsbackMusicIndex = active ?        //se shuffle estiver ativo usa-se o random caso contrario passamos o idInterno - 1
Math.floor(Math.random()*artistMusics.length) :
artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) - 1;  





// //teste
// const teste = artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) == artistMusicsbackMusicIndex;
// console.log(teste)

//-----------------Proteção para que random não escolha a musica atual-----------------
if ( artistMusicsbackMusicIndex == Number(artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name)) )
  {artistMusicsbackMusicIndex-=1} 
else{artistMusicsbackMusicIndex = artistMusicsbackMusicIndex}      //caso o random devolva a mesma música faz-se um novo random caso contrario manten-se o valor

// //-----------------TESTE PARA VER SE A PROTEÇÃO DEU CERTO-----------------
// const teste2 = artistMusics.findIndex((currentartistMusic)=>currentartistMusic.name===songObj.name) == artistMusicsbackMusicIndex;
// console.log(teste2)





//-----------------proteção de 9 para quando artistMusicsbackMusicIndex der -1-----------------
const restArtistMusicsBackMusicIndex = artistMusicsbackMusicIndex < 0 ? artistMusics.length - 1 : artistMusicsbackMusicIndex; 

//-----------------descorindo o nome da musica anterior escolhida no array artistMusics-----------------
const backMusicName = artistMusics.filter((currentArtistMusic,index) => index === restArtistMusicsBackMusicIndex)[0]; 

//-----------------Passando o ID da música a ser escolhida no back pegando o nome da música e artista como chave pois tem artistas como músicas iguais-----------------
const backMusicId = songsArray.filter((Music) =>Music.name === backMusicName.name && Music.artist === backMusicName.artist)[0];


// const nome = artistMusics.map((currrent=> currrent.name))
// console.log(nome)




  return (
    <div className="song">
      
      <div className='song__container'>
        
        <div className='song__image-container'>
            <img src={songObj.image} alt="" />  </div>


      </div>
      
      <div className='song__bar'>
      <Link to={`/artist/${artistobj.id}`}>
        <div className='song__artist-image'>
          
          <img 
          width={75}
          heigh={75}
          src={artistobj.image} alt={`Imagem do artista ${artistobj.name}`} /> </div>
          </Link>

        <Player
        duration={songObj.duration}
        songObjId={songObj.id}
        nextMusicId={nextMusicId}
        backMusicId={backMusicId}
        active={active}
        setActive={setActive}
        />
        
        <div> 
        <p className='song__name'>{songObj.name}</p>
        <p> {songObj.artist}</p>
        </div>

      </div>
    </div>
  )
}

export default song