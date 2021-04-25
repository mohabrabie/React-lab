import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

import { useCallback, useEffect, useState } from "react";
function App() {
  const [userId, setUserId] = useState("1");
  const handleInput = (userId)=>{
    setUserId(userId)
  }
  return (
    <div>
    <Header title="blog Application"/>
    <Form handleInput={handleInput}/>

    <List userId={userId}/>
    </div>
  );
}

export default App;
