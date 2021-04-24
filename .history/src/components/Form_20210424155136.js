import { useCallback, useEffect, useState } from "react";
import PostList from "./PostList";

function Form() {
    const [value, setValue] = useState("");
    return (
        <div>
            
            <input type="text" id="input"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={() => {console.log(value);
                
                // setValue(document.getElementById(input).value)
                setValue("");}}>Search by user</button>
                
            <PostList userId = {value}/>
        </div>
    )
}

export default Form
