import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(
      () => {
      return {monsters: users};
    },
      () => {
      console.log(this.state);
    }
    ));
  }
  render() {
    return (
      <div className="App">
        <input type='search' className='search-box' placeholder='search Monster' onChange={(event)=>{
        console.log(event.target.value);
        const searchString = event.target.value.toLowerCase();
        const filteredMonster = this.state.monsters.filter((monster)=>{
          return monster.name.toLowerCase().includes(searchString);
        });
        this.setState({ monsters: filteredMonster });
        }
      }></input>
        {this.state.monsters.map((monster)=>{
          return<div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    );
  }
}

export default App;
