import React from "react";

const Ninjas = (props) => { // or we can write const Ninjas = ({ninjas}) => {.. and not use second line
  const { ninjas } = props;
  const { deleteNinja } = props;
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20) {
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div> Name: {ninja.name}</div>
  //         <div>Age:{ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // })
  const ninjaList = ninjas.map(ninja => { // this code does the same this as the above using the ternary operator.-> condition ? () :() instead of if else 
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div> Name: {ninja.name}</div>
        <div>Age:{ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => { deleteNinja(ninja.id) }}>Delete ninja</button>
      </div>
    ) : null;
  });
  return (
    <div className="ninja-list">
      {ninjaList}
    </div>


  )
}



export default Ninjas;
