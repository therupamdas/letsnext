import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    coverimage:{
        type: String

    }
});


const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
