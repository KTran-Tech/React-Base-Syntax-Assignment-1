import React from 'react'
import './UserOutput.css'
const userOutput = (props) =>{
    return(
        <div className="UserOutput">
        <p >Hello, how are you doing {props.hardcodedUsername}</p>
    <p>Hi {props.username}</p>
        </div>
    );
}

export default userOutput;