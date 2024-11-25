import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

      // start here
    this.state = {
      monsters: [
        {
          name: 'Ron',
          id: '12ab',
        },
        {
          name: 'Jim',
          id: '34cd',
        },
        {
          name: 'Maddie',
          id: '56ef',
        },
      ]
    }
  }

  render() {

    return (
      <div className="App">
       { this.state.monsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
       })}
      </div>
    );
  }

}

export default App;
