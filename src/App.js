import * as React from 'react';

//defining the array as a variable
const list = [
  {
    title: 'React',
    url: 'https://react.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments: 3,
    points: 5,
    objectID: 0
  }

]

function App(){
  return (
    <div>
      <h1> Meet another React Component | Hacker Stories</h1>
      <Search />
      <hr></hr>

      <List />


    </div>
   
  )
}

function List(){
  return (
    <ul>
      {
        list.map(function (item){
          return (
            <li key={item.objectID}>
              <span><a href={item.url}>{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>

          );
        })
      }
    </ul>
  );
}

function Search(){
  return(
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />

    </div>
    
  )
}



export default App;
