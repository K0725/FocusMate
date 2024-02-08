import pg from 'pg';


// config object for the pool connection
// what is pool connection? -> https://node-postgres.com/features/pooling
// The client pool allows you to reuse clients, gaining the benefits of connection pooling.
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE    
}


export const pool = new pg.Pool(config) 

