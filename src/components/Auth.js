import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import LoginContext from "../LoginContext";

const Auth = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useContext(LoginContext);

    const login = async (userEmail, userPassword) => {
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${userEmail}`);
        const user = userData.data[0];
        if (!user) {
            alert("Invalid User!");
        } else {
            if (user.username !== userPassword) {
                alert("Invalid Password!");
                return;
            }
            console.log("valid");
            auth.userName = user.username;
            auth.userId = user.id;
            localStorage.setItem("userName", auth.userName);
            localStorage.setItem("userId", auth.userId);
            props.handleLogin();
            history.push('/');
        }
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Invalid Credintials!');
            return;
        }
        await login(email, password)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Enter email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <input
                    type='password'
                    placeholder='Enter email...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input type='submit' value='Login' className='btn btn-block' />
        </form>
    )
}

export default Auth;
