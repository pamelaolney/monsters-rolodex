import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

      // start here
    this.state = {
      monsters: [],
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    // Passing in a function that returns an object
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    // Passing in a callback function when setstate is finished to make sure the state has the correct value
    () => {
      console.log(this.state);
    }
  ));
  }

  render() {
    console.log('render')
    return (
      <div className="App">
       { this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1 key={monster.id}>{monster.name}</h1>
          </div>
        );
       })}
      </div>
    );
  }

}

export default App;
