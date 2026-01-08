import {MongoClient} from "mongodb";

const uri = "mongodb+srv://vittorecaio_db_user:ZwNrMS2m0ldWZy7o@cluster0.znrjt8c.mongodb.net/?appName=Cluster0";


const client = new MongoClient(uri);  //
const db = client.db("spotify_aula");  //db=database

// const songCollection = db.collection('songs')  para devolver todos os elementos
const songCollection = db.collection('songs').find({});   //{} para retornar tudo .toarray para virar um array

console.log(db);


//user:vittorecaio_db_user
//password:ZwNrMS2m0ldWZy7o