import mongoose from "mongoose";
import { type } from "os";
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
});

const User = mongoose.model('User', userSchema);

export default User;
