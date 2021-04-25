import { useEffect, useState } from "react";
import PostList from './PostList'
import PostComments from './PostComments'

const List = (props) => {
    const [displayPost, setDisplayPost] = useState(false); 
    let [postId, setPostId] = useState(0);
    const showPost = (postId)=>{
        setPostId(postId)
        setDisplayPost(true)
      }
      const showComments = ()=>{
        setDisplayPost(false)
      }
      console.log('from List '+ props.userId)
    return (
        <div className="postList">
            {displayPost ? <PostComments postId={postId} showComments={showComments}/> :<PostList userId={props.userId} showPost={showPost}/>}
        </div>
    )
}


export default List
