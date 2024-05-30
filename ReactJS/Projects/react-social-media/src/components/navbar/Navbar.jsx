import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
    return (
        <div className='navbarContainer'>

            <div className="navbarLeft">
                <span className="logo">Social App</span>
            </div>

            <div className="navbarCenter">
                <div className="searchBar">
                    <SearchIcon className='searchIcon'/>
                    <input type="text" placeholder='Search for any friend, post or video' className='searchInput' />
                </div>
            </div>

            <div className="navbarRight">

                <div className="navbarLinks">
                    <span className="navbarLink">Home</span>
                    <span className="navbarLink">TimeLine</span>
                </div>

                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <PersonIcon />
                        <span className='navbarIconBadge'>1</span>
                    </div>
                    <div className="navbarIconItem">
                        <ChatIcon />
                        <span className='navbarIconBadge'>1</span>
                    </div>
                    <div className="navbarIconItem">
                        <NotificationsIcon />
                        <span className='navbarIconBadge'>1</span>
                    </div>
                </div>

                <img src="/assets/person/1.jpeg" alt="" className='navbarImg' />
            </div>

        </div>
    )
}

export default Navbar
