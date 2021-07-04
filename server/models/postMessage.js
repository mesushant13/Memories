import  mongoose  from "mongoose";
//mongoose schema
const postSchema = mongoose.Schema({
    title : String,
    message : String,
    name : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likes : {
        type : [String],
        default :[],
    },
    createdAt :{
        type : Date,
        default : new Date()
    },
})
//turning schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;