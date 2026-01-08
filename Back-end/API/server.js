import express from "express";
import { artistArray } from "../../Front-end/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/src/assets/database/songs.js";


const app = express();
const PORT = 14;

app.get('/',(request,response)=>{
    response.send("OLÁ MUNDO")
}) 

app.get("/artists",(request,response)=>{
    response.send(artistArray)
}) 

app.get("/songs",(request,response)=>{
    response.send(songsArray)
}) 

app.listen(PORT, ()=> { 
    console.log(`Servidor está ouvindo ${PORT}`)
})  