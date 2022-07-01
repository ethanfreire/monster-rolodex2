import { Component } from "react";
import "./App.css";
import CardList from "./card-list/card-list.component";
import Card from "./card/card.component";
import SearchBox from "./search-box/search-box.component";
class App extends Component{
constructor(){
  super();
  this.state={
    monsters:[],
    searchField:'',

  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users)=> 
  this.setState(
    () => {
      return { monsters: users};
    },
    () => {
      console.log(this.state);
    }
  ))

};

onSearchChange = (event) => {
const searchField = event.target.value.toLocaleLowerCase();
this.setState(
  () => {
    return {searchField: searchField};
  }
)
}

render(){
  const {monsters , searchField} = this.state;
  const {onSearchChange} = this;
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className="App">
      <input
      className="search-box"
      type='search'
      placeholder="search monsters"
      onChange={onSearchChange}>
      
      </input>
      <CardList monsters={filteredMonsters}></CardList>
      <SearchBox></SearchBox>
      <Card></Card>
    </div>
  );
}
}

export default App;
