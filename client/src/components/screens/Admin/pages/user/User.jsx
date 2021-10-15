import './user.css'
import {PermIdentity,Publish,CalendarToday,PhoneAndroid,MailOutline,LocationSearching} from "@material-ui/icons"
import {Link} from 'react-router-dom'
export default function User(){
  return(
    <div className="user">
        <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt="" className="userShowImg"/>
              <div className="userShowTopTitle">
                <span className="userShowUsername">Mohamad Siysinyuy</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">suber911</span>
              </div>



              <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">02-12-1994</span>
              </div>

              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+237 653 255 47</span>
              </div>

              <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">msiysinyuy@gmail.com</span>
              </div>

              <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Buea | Cameroon</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form  className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" placeholder="suber911" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Mohamad Siysinyuy" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="email" placeholder="msiysinyuy@gmail.com" className="userUpdateInput"/>
                </div>
                <div className="userUpdateItem">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="02-12-1994" className="userUpdateInput"/>
                </div>
                <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+237 653 255 47" className="userUpdateInput"/>
                </div>

                <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" placeholder="Buea | Cameroon" className="userUpdateInput"/>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className = "userUpdateUpload">
                  <img className="userUpdateImg" src="https://i.pinimg.com/originals/af/1c/c3/af1cc3fa780eddc7c91a70f9e836b12c.jpg" alt=""/>
                  <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
