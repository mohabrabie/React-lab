import { useState, useEffect } from 'react'
import Post from './Post';

const PostDetails = (props) => {

    const [post, setPost] = useState([]);
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`)
            .then((response) => response.json())
            .then((json) => setPostComments(json))
            .catch((err) => {
                console.log("No post");
                console.log(err);
            });

        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
            }).catch((err) => {
                console.log("No post");
                console.log(err);
            });

    }, [props.match.params.id]);

    return (
        <div>
            <Post post={post} showButton={false} showLink={false} />
            <h2>Comments</h2>
            {postComments.map((post) => {
                return (<div key={post.id}>
                    <p>name: {post.name}</p>
                    <p>email: {post.email}</p>
                    <p>body: {post.body}</p>
                    <hr />
                </div>)
            })}
        </div>
    )
}

export default PostDetails
