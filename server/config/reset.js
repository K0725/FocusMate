import { pool } from './database.js'
import './dotenv.js'
import room from '../Controller/room.js'


const createTableQuery =  `
    DROP TABLE IF EXISTS rooms;

    CREATE TABLE IF NOT EXISTS rooms(
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        level VARCHAR(100) NOT NULL,
        Framework VARCHAR(100) NOT NULL,
        
    )
`

try{
    const res = await pool.query(createTableQuery)
    console.log('🎉 gifts table created successfully')
}catch(err){
    console.error('⚠️ error creating gifts table', err)
}

// cpnnect to the database async funtion that satisfy when the table is created
const connectRoomTable = async () => {
    await CreateRoomTable()
}

/*
* Insert Room Data
*/
roomData.forEach((room) => {
    const insertRoomQuery = `   
        INSERT INTO rooms (title, description, level, Framework)    
        VALUES ($1, $2, $3, $4)
    `
})

// Create a new room that set to an array of values
const VALUES = [
    room.title,
    room.description,
    room.level,
    room.Framework
]