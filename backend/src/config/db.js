import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error',()=>{
    console.error.bind(console,"Error in connecting to MongoDB");
    return;
})

db.once('open',()=>{
    console.log("MongoDB connected!!");
})

export default db;