import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

      // start here
    this.state = {
      monster1: {
        name: 'Ron',
      },
      monster2: {
        name: 'Jim',
      },
      monster3: {
        name: 'Maddie',
      }
    }
  }

  render() {

    return (
      <div className="App">
       <h1>{this.state.monster1.name}</h1>
       <h1>{this.state.monster2.name}</h1>
       <h1>{this.state.monster3.name}</h1>
      </div>
    );
  }

}

export default App;
