import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
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
        {/* {filteredMonster.map((monster)=>{
          return<div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        })} */}
        <SearchBox 
        onChangeHandler ={onSearchChange} 
        placeholder = {'Search Monsters'}
        className = {'search-box'}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
