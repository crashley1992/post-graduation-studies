import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.people.map( ( person, index ) => {
       return <Person
        key={person.id}
        name={person.name}
        changed={(event) => props.changed(event, person.id)}
        click={(event) => props.clic(index)}
        />
} )

export default persons;