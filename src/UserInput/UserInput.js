import React from 'react'

    const userInput = (props) =>{
        const divstyle={
            margin:"20px auto",
            fontSize:"10px"
        };
        return(
            <input style={divstyle} type="text" onChange={props.changeName} value={props.username}/>
        );
    }

export default userInput;