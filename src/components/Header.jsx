import { Link } from "react-router-dom";


import "./header.css";

const Header = (props) => {

    return (
        <nav >
            <h3>{props.title}</h3>
            {props.userName ? <ul className="Nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/create"><li>Create Post</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/logout"><li>Logout</li></Link>
                <h3>{props.userName}</h3>
            </ul> : ""}


        </nav>
    )
}

export default Header;
