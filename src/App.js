import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

      // start here
    this.state = {
      name: {firstName: 'Pam', lastName: 'Olney'},
      company: 'Google'
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             {/* change name */}
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({name: {firstName: 'Pamela', lastName: 'Christian'}})
            console.log(this.state);
            }
          }>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
