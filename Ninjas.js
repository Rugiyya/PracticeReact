import React, { Component } from "react";

// class Ninjas extends Component {
//   render() {

//    const { name, age, belt } = this.props;// this called destructering. it takes proporty names from bottom lines and stores them in var 
//     // with out line 7 lines 11 12 13 will look like this <div> Name: {this.props.name}</div>
//     return (
//       <div className="ninja">
//         <div> Name: {name}</div>
//         <div>Age:{age}</div>
//         <div>Belt: {belt}</div>
//       </div>

//     )
//   }
// }
class Ninjas extends Component {
  render() {

    const { ninjas } = this.props;// or we can also write const ninjas = this.props.ninjas
    const ninjaList = ninjas.map(ninja => { //this maps over ninjas array and returs a new array with each individul ninja 
      return (
        <div className="ninja" key={ninja.id}> {/* key={ninja.id} - is used because each ninja in the array needs to have unique key*/}
          <div> Name: {ninja.name}</div>
          <div>Age:{ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div>

      )
    })
    return (
      <div className="ninja-list">
        {ninjaList}
      </div>


    )
  }
}


export default Ninjas;
