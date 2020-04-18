import React, {Component} from 'react';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Ashley', pets: 'Oso', age: 27},
            {name: 'Olivia', pets: 'Karigan', age: 29}
        ]
    }

    switchNameHandler = () => {
        console.log('You clicked me');
        this.setState({
            persons: [
                {name: 'Ashley', pets: 'Ayra', age: 27},
                {name: 'Olivia', pets: 'Karigan', age: 29}
            ]
        })
    }

    clickedMeHandler = () => {
        console.log('second button');
        this.setState({
            persons: [
                {name: 'Ashley', pets: 'Ayra', age: 27},
                {name: 'I Love Olivia', pets: 'Karigan', age: 29}
            ]
        })
    }

    render() {
        return(
            <div>
                <h1>People</h1>
                <button onClick={this.switchNameHandler}>Click</button>
                <button onClick={this.clickedMeHandler}>Click2</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} pets={this.state.persons[0].pets}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} pets={this.state.persons[1].pets}/>
            </div>
        )
    }  
}


export default App;