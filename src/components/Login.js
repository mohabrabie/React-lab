import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(email) {
    return  fetch('https://jsonplaceholder.typicode.com/users?email='+email)
  .then((response) => response.json())
  .then((json) => console.log(json));
}


export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>email</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={() => {
            props.getLogin(username,password)}}>Submit</button>
        </div>
      </form>
    </div>
  )
}
