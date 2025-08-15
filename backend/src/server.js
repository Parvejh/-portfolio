import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import db from './config/db.js';
import contactRoutes from './routes/contactRoute.js'

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.set('trust proxy',1);
app.use(helmet());
app.use(cors({origin:ORIGIN,credentials:true}));
app.use(express.json({limit:"100kb"}));

const limiter = rateLimit({windowMS:10*60*1000, max:10});
app.use('/api/contact',limiter);

// health
app.get('/api/health',(req,res)=>{
    res.json({ok:true})
})
// contact routes
app.use('/api/contact',contactRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})