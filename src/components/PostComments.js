import { useEffect, useState } from "react";
import Post_Comment from './Post_Comment'
function PostComments(props) {
    console.log(props.postId + " from Comments")
    let [post_Comments, setPost_Comments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/"+ props.postId +"/comments")
          .then((res) => res.json())
          .then((data) => {
            setPost_Comments(data);
          });
      }, [setPost_Comments,props.postId]);

    return (
        <div>
            <button onClick={()=>props.showComments()}>go back</button>
            <div>
            {
            post_Comments.map((post_comment)=>(
                <Post_Comment key={post_comment.id} name={post_comment.name} id={post_comment.id} body={post_comment.body} email={props.email}/>))
                }
            </div>
        </div>
    )
}

export default PostComments
