import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete User</button>
        </div>
    )
}

export default Person; 