import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>My name is {props.name}, I'm {props.age}, and my pet is {props.pets}</p>
        </div>
    )
}

export default person;