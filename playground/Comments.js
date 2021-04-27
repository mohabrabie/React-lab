import Comment from "./Comment";

const Comments = (props) => {
    return (
        <ul>
            {props.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>)
            })}
        </ul>
    )
}
export default Comments;
