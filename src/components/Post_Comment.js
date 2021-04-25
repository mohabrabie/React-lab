import React from 'react'

function Post_Comment(props) {
    return (
        <div id={props.id} className="poststyle"  >
            <strong>name:</strong> {props.name}<br></br>
            <br></br>
            <strong>Comment:</strong> {props.body}
        </div>
    )
}

export default Post_Comment
