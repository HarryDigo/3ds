import axios from 'axios' 
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = import.meta.env.MONGO_URI

const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

// let db

// export const connect = () => {
//   db = client.db('intellidriver_db')
//   console.log('Connected to MongoDB')
// }

// export const getDB = () => db