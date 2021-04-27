import Post from "./Post";

const Posts = (props) => {

    return (
        <ul>
            {props.posts.map((post) => {
                return (
                    <li key={post.id}>
                        <Post post={post} showBody={false} showLink={true} /><hr />
                    </li>
                )
            })}
        </ul>
    )
}
export default Posts;
