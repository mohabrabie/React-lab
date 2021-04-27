import { Link } from "react-router-dom";

const Post = (props) => {
    return (

        <div>
            <p>UserID: {props.post.userId}</p>
            {props.showLink ? <Link to={`/posts/${props.post.id}`}><p>Title: {props.post.title}</p></Link> : <p>Title: {props.post.title}</p>}
            {props.showBody ? <p>body: {props.post.body}</p> : ""}
        </div>
    )
}

Post.defaultProps = {
    showBody: true,
    showLink: true,
};


export default Post;
