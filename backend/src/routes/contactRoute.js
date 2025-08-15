import {Router} from 'express';
import Message from '../models/Message.js'

const router = Router();

const isEmail = (s="")=> /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

router.post('/',async (req,res)=>{
    try{
        const {name, email, message} = req.body ||{};
        if(!name || name.trim().length<2) return res.status(400).json({message:"Name is required"});

        if(!isEmail(email)) return res.status(400).json({message:"Invalid Email"})

        if(!message || message.trim().length < 10) return res.status(400).json({message:"Message must be at least 10 characters"})

        const doc = await Message.create({
            name:name.trim(),
            email:email.trim(),
            message:message.trim(),
            meta:{
                ua:req.headers['user-agent'],
                ip:req.ip
            }
        })

        return res.status(200).json({ok:true,id:doc._id});

    }catch(error){
        console.log("Error in '/' :" , error);
        return res.status(500).json({message:"Server error . Please try again"});
    }
})

export default router;