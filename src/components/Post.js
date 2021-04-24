import React from 'react'
import "./post.css"

const Post = (props) => {
    return (
        <div id={props.id} className="poststyle"  >
            <h2>{props.title}</h2>
            <div>{props.body}</div>
        </div>
    )
}

// const poststyle ={ 
//     back
// }

export default Post