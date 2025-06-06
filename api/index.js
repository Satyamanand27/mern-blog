import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

// dotenv.config();
// dotenv.config({ path: '../.env' });
// console.log('MONGO URI:', process.env.MONGO);
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines give us __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the parent directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });


mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Database is connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


const app = express();
app.use(express.json());

app.listen(2000,()=>{
    console.log("server is running in port 2000");
}
)

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message ||'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})