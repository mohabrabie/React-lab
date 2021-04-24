import { useCallback, useEffect, useState } from "react";
import PostList from "./PostList";

function Form() {
    const [value, setValue] = useState("1");
    const [userId, setUserId] = useState("1");
    return (
        <div>
            
            <input type="text" id="input"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={() => {console.log(value);
                
                // setValue(document.getElementById(input).value)
                setUserId(value);}}>Search by user</button>

            <PostList userId = {userId}/>

        </div>
    )
}

export default Form
