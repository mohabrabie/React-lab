import { createContext } from "react";

const LoginContext = createContext({
    userName: null,
    userId: 0,
});

export default LoginContext;