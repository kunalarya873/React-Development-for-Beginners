import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[
        {
          name:'Linda',
          id:1234,
        },
        {
          name: 'Lee',
          id:12344,
        },
        {
          name:"Zhong",
          id:23,
        },
        {
          name: "Jerry",
          id: 2233,
        },
      ],
    }
  }
  render() {
    return (
      <div className="App">
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
