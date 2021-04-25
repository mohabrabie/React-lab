import React from 'react'
import Form from './Form'
const Header = (props) => {
    return (
        <header className="header" 
        style={{backgroundColor:"gray", 
        margin:'10px',
        padding:'10px'}}>
            <h1>{props.title}</h1>
            
        </header>
    )
}

export default Header
