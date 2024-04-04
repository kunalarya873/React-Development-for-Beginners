import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: '',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(
      () => {
      return {monsters: users};
    },
    ));
  }
  onSearchChange=(event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }
  render() { 
    const { monsters, searchField } = this.state;
    const {  onSearchChange } = this;
    const filteredMonster = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input type='search' className='search-box' placeholder='search Monster' onChange={onSearchChange}></input>
        {/* {filteredMonster.map((monster)=>{
          return<div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        })} */}
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
