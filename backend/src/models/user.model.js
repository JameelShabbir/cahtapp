import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    // {
    //     email: {
    //         typeof: 'string',
    //         required: true,
    //         unique: true
    //     },
    //     fullName: {
    //         typeof: 'string',
    //         required: true,
    //     },
    //     password: {
    //         typeof: 'string',
    //         required: true,
    //         minlength: 6,
    //     },
    //     profilePic: {
    //         typeof: 'string',
    //         default: '',
    //     },
    // },
    //     { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
