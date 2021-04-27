import { useState } from "react";

import axios from "axios";

const useComments = (initialComments) => {

    const [comments, setComments] = useState(initialComments);

    const getPostComments = async (postId) => {
        const postCommentsData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const postComments = postCommentsData.data
        setComments(postComments);
    };


    return (
        {
            comments,
            getPostComments,
        }
    );
}

export default useComments;
