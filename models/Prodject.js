const mongoose = require("mongoose")

const ProdjectSchema = new mongoose.Schema(
  {
  title:{type:String,required:true,unique:true},
  subTitle:{type:String,required:true},
  desc:{type:String},
  status:{type:String},
  references:{type:String},
  contributors:{type:String},
  active:{type:Boolean,default:true},
  fileName:{
    type:String,
    required:true
  },
  filePath:{
    type:String,
    required:true
  },
  fileType:{
    type:String,
    required:true
  },
  fileSize:{
    type:String,
    required:true
  }
},
{timestamps:true}
);

module.exports = mongoose.model("Prodject",ProdjectSchema)
