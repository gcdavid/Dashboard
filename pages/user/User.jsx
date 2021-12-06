import './user.css'
import { Link } from 'react-router-dom'
import { Publish, CalendarToday, LocationCity, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
const User = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit user</h1>
                <Link to="/newuser">
                <button className="userAddButton">Create</button>
                </Link>
                
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="due to" 
                        className="userShowImg"
                        />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Aaron Khadka</span>
                        <span className="userShowUserTitle">Sr.React Developer</span>
                    </div>
                    </div>

                    <div className="userShowButton">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">aaron69</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">18.10.1997</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">gcdavid17@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+977 9866327223</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationCity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Los Angeles, USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your name..."
                                className="userInput" />
                                <label>D.0.B</label>
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your date of birth..."
                                className="userInput" />
                                <label>Email-address</label>
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your email address..."
                                className="userInput" />
                                <label>Phone-no.</label>
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your phone-number..."
                                className="userInput" />
                                <label>Location</label>
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your location..."
                                className="userInput" />
                                
                            </div>
                        </div>
                        <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img
                            className="userUpdateImg"
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            />
                            <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default User
