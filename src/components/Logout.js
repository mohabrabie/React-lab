import { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../LoginContext";

const Logout = (props) => {
    const auth = useContext(LoginContext);
    auth.userName = null;
    auth.userId = 0;
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    props.handleLogout();
    return (
        <div>
            <Redirect to="/login/" />
        </div>
    )
}

export default Logout;
