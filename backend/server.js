import dotenv from 'dotenv'
import express from 'express';
import connectDB from './config/db.js';

import authRoute from './routes/authRoute.js'

dotenv.config({
    path:'.env'
});
const app = express();

// config database
connectDB()

//middleware
// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req, res) =>{
    res.send(" welcome to my server dgdfs");
})
 //routes
 app.use('/api/v1/auth',authRoute)








//PORT
const PORT = process.env.PORT;
// running server with express
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});