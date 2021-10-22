import axios from 'axios'

const apiUrl = "http://localhost:5000/api/private"

export const singleFileUplaod = async (data,obtions)=>{
  try{
    await axios.post(apiUrl +"singleFile",data ,obtions)
  }catch(error){
    throw error
  }
}

export const getSingleFiles = async () =>{
  try{
    const {data} = await axios.get(apiUrl + "getallSingleFiles")
    return data
  }catch(error){
    throw error
  }
}

export const multipleFilesUpload = async (data,obtions)=>{
  try{
    await axios.post(apiUrl + "multipleFiles",data,obtions)
  }catch(error){
    throw error
  }
}

export const getMultipleFiles = async ()=>{
  try{
    const {data} = await axios.get(apiUrl+"getallMultipleFiles")
    return data
  }catch(error){throw error}
}
