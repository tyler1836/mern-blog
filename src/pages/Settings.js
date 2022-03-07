import React from 'react'
import Sidebar from '../components/Sidebar'
function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>

                <form action="" className="settingsForm">
                    <div className="settingsP">
                        <img src="" alt="" />
                        <label htmlFor="fileInput">
                            Profile Picture<i className='settingsProfileIcon fa-regular fa-user profileIcon'></i>
                            <input type="file" id='fileInput' style={{ display: 'none' }} />
                        </label>
                    </div>
                    <label>Username</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="email" />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings