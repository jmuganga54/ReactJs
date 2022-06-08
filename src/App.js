import * as React from 'react';



const App = ()=>{
  //defining the array as a variable
  const stories = [
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
  return (
    <div>
      <h1> Meet another React Component | Hacker Stories</h1>
      <Search />

      <hr/>

      
      <List list={stories}/>



    </div>
   
  )
}

const List = (props)=>(
    <ul>
      {props.list.map((item)=>(
          <Item key={item.objectID} item={item} />
        ))}
    </ul>
);

const Item = (props)=>(
  <li>
      <span><a href={props.item.url}>{props.item.title}</a></span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
  </li>

)

const Search = ()=>{
  const handleChange = (event)=>{
    console.log(event);
  }
  return(
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange = {handleChange} />

    </div>
    
  )
  };





export default App;
