import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";
import Auth from "./components/Auth";
import Logout from "./components/Logout";
import Guard from "./components/Guard";
import LoginContext from "./LoginContext";

import './App.css';

function App() {

  const [name, setName] = useState(localStorage.getItem("userName"));
  const auth = useContext(LoginContext);

  const handleLogin = () => {
    setName(auth.userName);
  };

  const handleLogout = () => {
    setName(null);
  };

  return (
    <Router>
      <Header title={"Blog Application"} userName={name}></Header>
      <div className="App">
        <Switch>
          <Route path="/login" render={(props) => <Auth handleLogin={handleLogin} {...props} />} />
          <Guard>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={CreatePost} />
            <Route path="/about" component={About} />
            <Route path="/logout" render={(props) => <Logout handleLogout={handleLogout} {...props} />} />
            <Route path="/posts/:id" component={PostDetails} />
          </Guard>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
