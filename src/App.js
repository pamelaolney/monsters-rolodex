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
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
  }

  render() {
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
