import mongoose from "mongoose";
import { Schema } from "mongoose";

const FoodShema = new Schema({
    name:{
        type: String,
        require: true
    },
    storeName:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
    },
})

export default mongoose.model("Shop", FoodShema)