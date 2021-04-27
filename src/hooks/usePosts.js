import { useState, useContext, useEffect } from "react";
import LoginContext from "../LoginContext";

import axios from "axios";

const useTasks = (initialTasks) => {
    const auth = useContext(LoginContext);
    const [posts, setPosts] = useState(initialTasks);

    useEffect(() => {
        //console.log(posts);
        const fetchData = async () => {
            const userId = auth.userId || localStorage.getItem("userId");
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            console.log(data);
            const userPosts = data.data
            setPosts(userPosts);
        };
        fetchData();
    }, [auth.userId]);

    // const getUserData = async () => {
    //     const userId = auth.userId;
    //     const userData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    //     const userPosts = userData.data
    //     setPosts(userPosts);
    // };


    return (
        {
            posts,
            //getUserData,
        }
    );
}

export default useTasks;
