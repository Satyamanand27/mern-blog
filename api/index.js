import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

// dotenv.config();
dotenv.config({ path: '../.env' });


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('database is connected.')
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());

app.listen(2000,()=>{
    console.log("server is running in port 2000");
}
)

app.use('/api/user',userRoutes)