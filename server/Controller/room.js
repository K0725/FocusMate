import {pool} from '../config/database.js'

// async function to get all rooms promise is used to handle the result of the query
const getRooms = async (req, res) => {
    try{
        // await the result of the query
        const results = await pool.query('SELECT * FROM rooms')
        res.status(200).json(results.rows)
    }catch(error){
        res.status(409).json({message: error.message})
    }

}

//This means that it can be imported and used in other parts of the application.
export default {
    getRooms
}