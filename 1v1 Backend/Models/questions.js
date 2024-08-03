import mongoose from "mongoose";

const { Schema, model } = mongoose;

const QuestionSchema = new Schema({
    question: {
        type: String, 
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correct_answer: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Questions', QuestionSchema);