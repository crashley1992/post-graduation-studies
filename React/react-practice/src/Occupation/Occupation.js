import React from 'react';

const Occupation = (props) => {
    return(
        <div>
            <p onClick={props.click}>my job is {props.occupation}</p>
        </div>
    )
}

export default Occupation;