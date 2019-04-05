import React, { Component } from 'react';
import Person from './Person/Person';
import '../App.css';

class App extends Component {
  state = {
    person : [
      {name:"Naruto",age:21},
      {name:"Sasuke",age:20},
      {name:"Shikamaru",age:20}
    ],
    otherState : 'some other values',
    showPersons : false
  }

  switchNameHandler = (name) => {
    this.setState({
      person : [
        {name:name,age:21},
        {name:"Hinata",age:20},
        {name:"Sakura",age:33}
      ]
    })
  }

nameChnageHandler = (event) => {
  this.setState({
    person : [
      {name:"Tsunade",age:21},
      {name:event.target.value,age:20},
      {name:"Hanabi",age:33}
    ]
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}


  render() {

    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1x solid blue',
      padding:'8px',
      cursor : 'pointer'
    }

    return (
      <div className="App">
      <h1>React-App</h1>
      <p>This is working.</p>
      <button
        style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>
      {this.state.showPersons ?
        <div>
        <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
        >
        </Person>
        <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this,"Kakashi Hatake")}
            changed={this.nameChnageHandler}
        >
        </Person>
        <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
        >Mr. X.</Person>
      </div> : null
    }

      </div>
    );
  }
}

export default App;
