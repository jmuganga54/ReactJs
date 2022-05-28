import * as React from 'react';

//react components, App component, defined in PascalCase
function App(){
  const title = 'React'
  return(
    //app component return code that resemble HTML
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

/**
 * Variable defined outside and within a component.
 * As a rule of thumb: If a variable does not need
 * anything from within the function component's body (e.g parameter)
 * the define it outside the component which avoids redefining it on every 
 * function call
 */




export default App;
