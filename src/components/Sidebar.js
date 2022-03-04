import React from 'react'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut tenetur eaque atque, modi ipsam iusto debitis id sunt libero neque nostrum maxime consectetur iure, nobis qui doloribus tempore at accusantium.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="fa-brands fa-facebook-square navIcon"></i>
                    <i className="fa-brands fa-twitter-square navIcon"></i>
                    <i className="fa-brands fa-pinterest-square navIcon"></i>
                    <i className="fa-brands fa-instagram-square navIcon"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar