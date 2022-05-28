import * as React from 'react';

function getTitle(title){
  return title;
}
function App(){

  return(
    //app component return code that resemble HTML
    <div>
      <h1> Hello {getTitle('React')}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
    </div>
  )
}


export default App;
