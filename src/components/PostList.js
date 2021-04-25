import { useEffect, useState } from "react";
import Post from './Post'

function PostList(props) {
    console.log(props.id+" From Post List")
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/"+props.userId+"/posts")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
          });
      }, [setPosts,props.userId]);
    return (
        <div>
            {
            posts.map((post)=>(
                <Post title={post.title} id={post.id} key={post.id} showPost={props.showPost} />))
                }
                
        </div>
    )
}

export default PostList
