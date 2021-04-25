import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import "./App.css"
import Login from './components/Login';

function App() {
  // const [userId, setUserId] = useState("1");
  // const handleInput = (userId)=>{
  //   setUserId(userId)
  // }
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [login,setLogin] = useState(false);

  const getLogin = (userName,Password)=>{
    console.log("ay 7agaaaaaaaaaaaa")
    setUserName(userName)
    setPassword(password)
    setLogin(true)
    console.log(userName)
    }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login getLogin={getLogin}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>




    /* <Header title="blog Application"/>
    <Form handleInput={handleInput}/>

    <List userId={userId}/> */
  );
}

export default App;
