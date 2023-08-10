import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const WillClient= mongoose.models.willclients || new mongoose.model('willclients',contactSchema)

export default WillClient;