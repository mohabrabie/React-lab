import React from 'react'

const Post = (props) => {
    return (
        <div id={props.id} className="header">
            <h2>{props.title}</h2>
            <div>{props.body}</div>
        </div>
    )
}

export default Post