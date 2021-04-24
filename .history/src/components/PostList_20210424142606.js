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
            <Post title="first post" body="blablablablala"/>
        </div>
    )
}


export default PostList
