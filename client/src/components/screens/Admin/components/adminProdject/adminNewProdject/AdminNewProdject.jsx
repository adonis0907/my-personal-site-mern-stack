import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import {Publish} from "@material-ui/icons"
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {singleFileUplaod} from '../../../../../data/api'
import './AdminNewProdject.css'

const AdminNewProdject = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");
  const [title,setTitle] =useState("")
  const [subTitle,setSubTitle] =useState("")
  const [desc,setDesc] =useState("")
  const [status,setStatus] =useState("")
  const [references,setReferences] =useState("")
  const [contributors,setContributors] =useState("")
  const [category,setCategory] =useState("")
  const [githubLink,setGithubLink] =useState("")
  const [siteLink,setSiteLink] =useState("")
  const [file,setFile] =useState("")
  const [singleProgress,setSingleProgress] =useState("")

  const singleFileObtions ={
    onUploadProgress:(progressEvent)=>{
      const {loaded,total} = progressEvent;
      const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
      setSingleProgress(percentage)
    }
  }

  const singleFileChange =(e)=>{
    setFile(e.target.files[0])
    setSingleProgress(0)
  }

  const uploadSingleFile = async(e)=>{
    e.preventDefault()


    const formData=new FormData()
    formData.append('title',title)
    formData.append('subTitle',subTitle)
    formData.append('desc',desc)
    formData.append('status',status)
    formData.append('references',references)
    formData.append('contributors',contributors)
    formData.append('category',category)
    formData.append('githubLink',githubLink)
    formData.append('siteLink',siteLink)
    formData.append('file',file)
    console.log("this is form data",formData)
//     for(var pair of formData.entries()) {
//    console.log(pair[0]+ ', '+ pair[1]);
// }
    // console.log("form data is ", {title,subTitle,desc,status,references,contributors,category,githubLink,siteLink,formData})
    const config = {
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${localStorage.getItem("authToken")}`
      }
    }

    // try{
    //  await axios.post("/api/private/createnewprodject",formData,config);
    //
    // }catch(error){
    //   console.log(error)
    // }
    await singleFileUplaod(formData,config,singleFileObtions)

      // console.log(singleFile)
  }

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get("/api/private",config)

        setPrivateData(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/login")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>
    <div className="wrapper" >
    <AdminHeader logoutHandler={logoutHandler} />

    <AdminSideBar />
    <div className="content-wrapper" style={{background: `url(${img}) repeat fixed`}}>
    <div className="newAdminProdject">
      <h1 className="newAdminProdjectTitle">New AdminProdject</h1>
      <form className="newAdminProdjectForm" onSubmit={uploadSingleFile} encType="multipart/form-data">
          <div className="newAdminProdjectItem newAdminBorder">
            <label>Title</label>
            <input type="text" placeholder="The Venus Prodject"  onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder" >
            <label>Sub Title</label>
            <input type="text" placeholder="Save Mankind"  onChange={(e)=>setSubTitle(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Description</label>
            <input type="textarea" placeholder="This prodject is to save ...."  onChange={(e)=>setDesc(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Prodject Status</label>
            <input type="text" placeholder="Complete"  onChange={(e)=>setStatus(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>References</label>
            <input type="text" placeholder="Help.com"  onChange={(e)=>setReferences(e.target.value)}/>
          </div>
          <div className="newAdminProdjectItem newAdminBorder">
            <label>Contributors</label>
            <input type="text" placeholder="Mohamad Siysinyuy"  onChange={(e)=>setContributors(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Category</label>
            <input type="text" placeholder="REACT,HTML/CSS,MERN-stack.."  onChange={(e)=>setCategory(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>GitHub Link</label>
            <input type="text" placeholder="Github.com/mrsuber"  onChange={(e)=>setGithubLink(e.target.value)}/>
          </div>

          <div className="newAdminProdjectItem newAdminBorder">
            <label>Life Site Link</label>
            <input type="text" placeholder="personal.com"  onChange={(e)=>setSiteLink(e.target.value)}/>
          </div>




            <div className = "adminProdjectUpdateUpload">
              <img className="adminProdjectUpdateImg" src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt=""/>
              <label htmlFor="file"><Publish className="adminProdjectUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}} onChange={(e)=>singleFileChange(e)}/>
            </div>
            <div>
                <CircularProgressbar
                className="Admincircularcontrol"
                  value={singleProgress}
                  text={`${singleProgress}%`}
                  styles={buildStyles({
                    rotate:0.25,
                    strokeLinecap:'butt',
                    textSize:'16px',
                    pathTransitionDuraton:0.5,
                    pathColor:`rgba(255,136,136,${singleProgress/100})`,
                    textColor:'#f88',
                    trailColor:'#d6d6d6',
                    backgroundColor:'#3e98c7',
                  })}
                />
            </div>

          <button className="newAdminProdjectButton" type="submit">Create</button>

      </form>
    </div>
    </div>
    <AdminFooter />
    </div>
      </>
  )
}

export default AdminNewProdject
