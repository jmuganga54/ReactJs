import * as React from 'react';

//defining the array as a variable
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function App(){
  return (
    <div>
      <h1> Joseph Muganga Testing</h1>
      

      <ul>
        {numbers.map((number)=>{
          return <li>{number * 10}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
