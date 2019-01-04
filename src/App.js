import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'adfdf1',name:"Dipanjan" , age: 30 },
      {id: 'adfdf4',name:"Chiranjit" , age: 30 },
      {id: 'adfdf6',name:"Udayan" , age: 30 }
    ],
    nameChange: false
  }
  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name:newName , age: 30 },
        {name:"Chiranjit" , age: 30 },
        {name:"Udayan" , age: 30 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]}

    //const person = object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex] = person

    /* this.setState({
      persons: [
        {name:"Dipanjan" , age: 30 },
        {name:event.target.value , age: 30 },
        {name:"Udayan" , age: 30 }
      ]
    }) */
    this.setState({
      persons: persons })
  }

  togglePersonHandler = () =>{
    const changename = this.state.nameChange
    this.setState({nameChange: !changename})
  }

  deletePersonHandler = (personIndex) => {
    /* const persons = this.state.persons.slice(); */

    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})

  }

  render() {
  const style={
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
  }

  let persons = null

  if(this.state.nameChange){
    persons = <div>
      {
        this.state.persons.map((person, index) => {
          return <Person name={person.name} 
          age={person.age}
          click={this.deletePersonHandler.bind(this, index)}
          key={person.id}
          change = {(event) => this.nameChangeHandler(event, person.id)}/>
        })
      }
          {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies: Driving</Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dip!!")}
          change={this.nameChangeHandler}/>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */}
          </div>

  }

    return (
      <div className="App">
        <h1>Hi I am react App</h1>
        <p>This is really working</p>
        <button
        style={style} 
        onClick={this.togglePersonHandler}>Toggle User</button>

        {persons}
        {/*  {
          this.state.nameChange ? 
          <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies: Driving</Person>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dip!!")}
          change={this.nameChangeHandler}/>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
          </div>:null

        } */}
      </div>
    );
  }
}

export default App;
