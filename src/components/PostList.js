import { useCallback, useEffect, useState } from "react";
import Post from './Post'

const PostList = (props) => {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
            // setLoading(false);
          });
      }, [setPosts]);
    return (
        <div className="postList">
            {posts.map((post)=>(
                <Post title={post.title} body={post.body}/>
            ))}
            
        </div>
    )
}


export default PostList
