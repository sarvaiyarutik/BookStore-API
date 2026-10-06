

import mongoose from "mongoose";

const bookStoreSchema = new mongoose.Schema({


        title:{
            type:String,
            required:true
        },
        author:{
           type:String,
           required:true
        },
        ISBN:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        bookImg:{
            type:[String],
            required:true
        },
    },


{time:true});

const BookStore = mongoose.model("model Data ",bookStoreSchema)

export default BookStore;