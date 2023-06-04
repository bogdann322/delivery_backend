import mongoose from "mongoose";
import { Schema } from "mongoose";

const OrderShema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    address:{
        type: String,
    },
    order:{
        type: Array,
        require: true
    }
})

export default mongoose.model("Order", OrderShema)