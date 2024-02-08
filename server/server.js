import express from 'expres';

import './config/dotenv.js';

import roomRoutes from './routes/rooms.js';

const app = express();

app.use('/rooms', roomRoutes);

const PORT = process.env.PORT || 3001



app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)
})