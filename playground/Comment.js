const Comment = (props) => {
    return (
        <div>
            <p>name: {props.comment.name}</p>
            <p>email: {props.comment.email}</p>
            <p>body: {props.comment.body}</p>
        </div>
    )
}


export default Comment;
