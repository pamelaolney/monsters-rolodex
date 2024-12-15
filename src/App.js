import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

      // start here
    this.state = {
      monsters: [],
      // to get access of search outside of the component, empty string because it's the null/empty case
      searchField: ''
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

onSearchChange = (event) => {
  // includes is not case sensitive, so we want to make sure the value is lowercase
  const searchField = event.target.value.toLowerCase();
  this.setState(
    () => {
  // in js es6, javascript recognizes that the key "searchField" will be the name of this variable and the value will be the value of the "searchField" variable
  return { searchField }
  // passing a callback once set state is updated
}, () => {
})
}


  render() {
    console.log('render')


    const { monsters, searchField } = this.state;
    const { onSearchChange} = this;
    // receives a callback and pass the callback based on what you give it, it's expecting a boolean. if true it keeps the element. if false it takes it out
    const filteredMonsters = monsters.filter((monster) => {
    // if the name includes the string, then i want you to return true
    return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
       { filteredMonsters.map((monster) => {
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
