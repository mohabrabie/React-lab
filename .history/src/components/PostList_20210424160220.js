import { useCallback, useEffect, useState } from "react";
import Post from './Post'

const PostList = (props) => {
    // Data from Form is:{this.props.userId}
    console.log(props.userId + "from postlist");
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users/"+props.userId+"/posts")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
            // setLoading(false);
          });
      }, [setPosts,props.userId]);
    return (
        <div className="postList">
            {posts.map((post)=>(
                <Post title={post.title} body={post.body} key={post.id}/>
            ))}
            
        </div>
    )
}


export default PostList
