import { useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";

import LoginContext from "../LoginContext";

const Guard = (props) => {
    const auth = useContext(LoginContext);

    return (
        <Fragment>
            {(auth.userName || localStorage.getItem("userName")) ? props.children : <Redirect to="/login/" />}
        </Fragment>
    )
}

export default Guard;
