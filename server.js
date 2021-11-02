require('dotenv').config({path:"./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const path = require('path')
const multer = require("multer")




//connectDB
connectDB();

const app = express();

app.use(express.json())



//Error unhandler(should be last piece of middleware)
app.use(errorHandler)

//file upload
const cors = require('cors')
const bodyParser=require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
const fileSizeFormatter= (bytes,decimal) =>{
  if(bytes===0){
    return '0 Bytes'
  }
  const dm = decimal || 2
  const sizes = ['Bytes','KB','MB','GB','TB','PB','EB','YB','ZB']
  const index= Math.floor(Math.log(bytes)/Math.log(1000));
  return parseFloat((bytes / Math.pow(1000,index)).toFixed(dm)) + ' ' + sizes[index];
}
let name ={}
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public/prodjects")
  },
  filename:(req,file,cb)=>{
     name=Date.now()+file.originalname,
     // name.filePath=file.path,
     // name.fileType=file.mimetype,
     // name.fileSize=fileSizeFormatter(file.size,2)

    cb(null,name)
  }
})
const upload = multer({storage});
app.use('/api/upload',upload.single("file"),(req,res)=>{

  try{
    return res.status(200).json(name)
  }catch(err){console.log(err)}
})
// end file upload
app.use('/api/auth',require('./routes/auth'))
app.use('/api/private',require('./routes/private'))


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'/client/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))

  })
}else{
  app.get('/', (req,res)=>{
    res.send('Api running');
  })
}


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))


process.on('unhandleRejection', (err,promise) =>{
  console.log(`Logged Error:${err}`)
  server.close(()=>process.exit(1))
})
