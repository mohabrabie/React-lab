import usePosts from "../hooks/usePosts";

import Posts from "./Posts";

const Home = () => {

    const { posts } = usePosts([]);

    return (
        <div>
            <Posts posts={posts}></Posts>
        </div>
    )
}

export default Home;
