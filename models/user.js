var mongoose=require("mongoose");

//DEFINING THE USER MODEL
var userSchema=new mongoose.Schema({

	//TODO: DEFINE USERNAME AND PASSSWORD ATTRIBUTES
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required:true
    }
    

    ,loaned_books:[
        //TODO: embed reference to id's of book copies loaned by this particular user in this array
        {book:{
            type:mongoose.Schema.Types.ObjectId
        }}
    ]}
);

const User=mongoose.model("User",userSchema);
module.exports=User;