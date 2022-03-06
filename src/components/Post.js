import React from 'react'

function Post() {
    return (
        <div className='post'>
            <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptates quis animi dignissimos voluptatem odio deserunt accusamus, unde a debitis incidunt aperiam molestias adipisci cupiditate dicta at aut nihil laborum non omnis numquam et. Corrupti?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptates quis animi dignissimos voluptatem odio deserunt accusamus, unde a debitis incidunt aperiam molestias adipisci cupiditate dicta at aut nihil laborum non omnis numquam et. Corrupti?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptates quis animi dignissimos voluptatem odio deserunt accusamus, unde a debitis incidunt aperiam molestias adipisci cupiditate dicta at aut nihil laborum non omnis numquam et. Corrupti?
                    </p>
            </div>
        </div>
    )
}

export default Post