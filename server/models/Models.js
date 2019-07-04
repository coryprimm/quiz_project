const mongoose = require('mongoose');


const TermSchema = new mongoose.Schema({
    question: {type: String, required: [true, "Question is required"], minlength: [5, "Question must be 5 characters"]}, 
    answer: {type: String, required: [true, "Answer is required"], minlength: [5, "Name must be 5 characters"]},
    // difficulty: {type: String}, 
    quiztitle: {type: String}, 
    memory: {type: String},
    mnemonic: {type: String}
});

const QuizSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"], minlength: [5, "Title must be 5 characters"]}, 
    // file: {type: String}, 
    description: {type: String, required: [true, "Description is required"], minlength: [5, "Description must be 5 characters"]}, 
    author: {type: String, required: [true, "Author is required"], minlength: [5, "Author must be 5 characters"]} ,
    // terms: [TermSchema]
});

    // const UnfilteredSchema = new mongoose.Schema({
    //     contents = [TermSchema]
    // });

    // const EasySchema = newmongoose.Schema({
    //     contents = [TermSchema]
    // });

    // const HardSchema = newmongoose.Schema({
    //     contents = [TermSchema]
    // });

mongoose.model('Term', TermSchema);
mongoose.model('Quiz', QuizSchema);
    // mongoose.model('Term', UnfilteredSchema);
    // mongoose.model('Quiz', EasySchema);
    // mongoose.model('Quiz', HardSchema);