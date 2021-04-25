import { useCallback, useEffect, useState } from "react";
import PostList from "./List";

function Form(props) {
    const [value, setValue] = useState("1");
    const showPost= (postId)=>{
    }
    return (
        <div>
            
            <input type="text" id="input"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={() => {
                props.handleInput(value)
                }}>Search by user</button>
        </div>
    )
}

export default Form
