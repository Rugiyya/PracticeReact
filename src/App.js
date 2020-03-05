import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja"

class App extends Component {
  state = {
    ninjas: [
      { name: "Rugu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id)

  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p> Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
    //ninjas in line 17 is a prop. we're taking array if ninjas from stat and pasing it down as a prop
  }
}
export default App;
