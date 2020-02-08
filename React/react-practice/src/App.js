import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import people from './people.json';
import Occupation from './Occupation/Occupation';

class App extends Component {
  state = {
    people,
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const peopleIndex = this.state.people.findIndex(p => {
      return p.id === id;

      const person = {
        ...this.state.people[peopleIndex]
      }

      person.name = event.target.value;
      const people = [...this.state.people];
      people[peopleIndex] = person;
    });

    this.setState( {
    people: people
     })
  }
   
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  deletePersonHandler = (peopleIndex) => {
    // const people = this.state.people.slice(); -- es5
    const people = [...this.state.people]; //more common es6 method
    people.splice(peopleIndex, 1);
    this.setState({ people: people })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPersons) {
      people = (
        <div>
        {/* map will map an array into an array with JSX objects */}
        {this.state.people.map((person, index) =>(<Person
        key={person.id}
        name={person.name}
        changed={(event) => this.nameChangedHandler(event, person.id)}
        click={() => this.deletePersonHandler(index)}
        />))}
    </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* conditional to show people */}
        { people }
        </div>
    )
  }
}
    
export default App;
