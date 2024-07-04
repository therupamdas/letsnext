import mongoose from 'mongoose';
const reqpostSchema = new mongoose.Schema({
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
    orderofclient:{
        type: String
    }
});

// Create a model using the schema
const Reqpost = mongoose.models.Reqpost || mongoose.model('Reqpost', reqpostSchema);
export default Reqpost;
