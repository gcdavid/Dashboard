import React from 'react'
import './navbar.css'
import { Notifications, Language, Settings } from '@material-ui/icons'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin-Portal</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Notifications/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">6</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <div className="topbarIconContainer">
                        <img
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="not a good"
                        className="profileImg"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

