import React from 'react'

function Navbar() {
    return (
        <div className='nav'>
            <div className="left">
            <i className="fa-brands fa-facebook-square navIcon"></i>
            <i className="fa-brands fa-twitter-square navIcon"></i>
            <i className="fa-brands fa-pinterest-square navIcon"></i>
            <i className="fa-brands fa-instagram-square navIcon"></i>
            </div>
            <div className="center">
                <ul className="toplist">
                    <li className='liItem'>HOME</li>
                    <li className='liItem'>ABOUT</li>
                    <li className='liItem'>CONTACT</li>
                    <li className='liItem'>WRITE</li>
                    <li className='liItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="right">
                <button className='profile'><i className='fa-regular fa-user profileIcon'></i></button>
                <i className='fas fa-search searchIcon'></i>
            </div>
        </div>
    )
}

export default Navbar