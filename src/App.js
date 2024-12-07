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
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          // includes is not case sensitive, so we want to make sure the value is lowercase
          const value = event.target.value.toLowerCase();
          // receives a callback and pass the callback based on what you give it, it's expecting a boolean. if true it keeps the element. if false it takes it out
          const filteredMonsters = this.state.monsters.filter((monster) => {
            // if the name includes the string, then i want you to return true
            return monster.name.toLocaleLowerCase().includes(value);
          });

        this.setState(() => {
          return {monsters: filteredMonsters}
        })
        }}
        />
       { this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1 key={monster.id} >{monster.name}</h1>
          </div>
        );
       })}
      </div>
    );
  }

}

export default App;
