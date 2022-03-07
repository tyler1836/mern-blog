import React from 'react'

function Write() {
    return (
        <div className='write'>
            <img src="https://images.pexels.com/photos/1470168/pexels-photo-1470168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className='writeImg'/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-square-plus"></i>
                    </label>

                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button type='submit' className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write