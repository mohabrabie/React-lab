import { useCallback, useEffect, useState } from "react";

function Form() {
    const [value, setValue] = useState("");
    return (
        <div>
            
            <input type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
            <button onClick={() => {console.log(value);
            
                setValue("");}}>Search by user</button>
        </div>
    )
}

export default Form
