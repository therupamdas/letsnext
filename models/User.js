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

// Create a model using the schema
const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
