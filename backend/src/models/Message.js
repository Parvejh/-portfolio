import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        maxlength:160
    },
    message:{
        type:String,
        required:true,
        trim:true,
        minlength:10,
        maxlength:1500
    },
    meta:{
        type:Object
    }
},{
    timestamps:true
})

const Message =  mongoose.model("Message",messageSchema);
export default Message;