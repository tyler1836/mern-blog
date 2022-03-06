import React from 'react'

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singleWrapper">
                <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='singlePostImg' />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit.
                </h1>
                <div className="edit">
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <strong>Tyler</strong></span>
                    <span className='singlePostDate'>1 hour ago</span>

                </div>
                <div className="singlePostDesc">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit ducimus necessitatibus corporis similique illum. Non sed numquam eveniet voluptates fuga eaque eum tenetur dolore modi sint! Impedit eaque, temporibus molestiae maxime nulla modi esse minima, sunt ut iste error rem exercitationem voluptates veniam! Sit aut earum repellat facilis nesciunt natus repellendus sequi beatae neque.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost