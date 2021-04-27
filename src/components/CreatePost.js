import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import LoginContext from "../LoginContext";

const CreatePost = () => {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const auth = useContext(LoginContext);

    const createPost = async (title, body) => {
        const payload = {
            title,
            body,
            userId: auth.userId,
        };
        const data = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
        const post = data.data;
        console.log(post);
        history.push(`/posts/7`);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title || !body) {
            alert('InvalidPpost!');
            return;
        }
        await createPost(title, body)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <input
                    type='textArea'
                    placeholder='Body...'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <input type='submit' value='Add Post' className='btn btn-block' />
        </form>
    )
}

export default CreatePost;
