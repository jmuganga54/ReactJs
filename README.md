## Topic

## Keywords && Notes
### Meet the React Components
> Every React application is built on the foundation of React Component. First component which is located in the `src/App.js` file
```
import * as React from 'react';

const title = 'React';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```
> Before we dive deeper into each topic
⋅⋅* First, this React component, called the App Component.
⋅⋅* Second, the App component doesn't receive any parameters in its function signature
⋅⋅* And third, the App components returns code the resembles HTML

> Variables defined in the function's body will be re-defined each time functions runs, which shouldn't be something new if you are familiar with Javascript and its functions.

```
import * as React from 'react';
function App() {
  const title = 'React';
  return (
    <div>
      <h1>Hello World</h1>
    </div>
); }
export default App;
```

### React JSX
> Everything returned from a React component will be displayed in the browser. The output of the App component not only resembles HTML, but it can also be mixed with Javascript. In fact, this output is called JSX (Javacript XML)

```
import * as React from 'react';


function App(){
  const title = 'React'
  return(
    //app component return code that resemble HTML
    <div>
      <h1>Hello {title}</h1>
    </div>
  )
}


export default App;
```

> Let's focus on the HTML which differs slightly in JSX. An HTML input field with a label can be defined as follows:

```
import * as React from 'react';

const title = 'React'
function App(){

  return(
    //app component return code that resemble HTML
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
    </div>
  )
}


export default App;
```

> JSX replaces a handful of internal HTML attributes casued by internal implementation details of React itself. However, you can find all the [supported HTML attribues](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)

```
import * as React from 'react';

const welcome = {
  greetings:'Hey',
  title: 'React'
}
function App(){

  return(
    //app component return code that resemble HTML
    <div>
      <h1>{welcome.greetings} {welcome.title}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>
    </div>
  )
}


export default App;
```

> Essentially everything in curly braces in JSX can be used for Javascript. For example, executing a function works this way too:

```
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
```

> JSX was initially invented for React, but it became useful for other modern libraries and frameworks after it gained popularity. It's one of my favorite thing about React. Without any extra templating syntax (except for the curly braces), we are now able to use Javascript in HTML. 

### Lists in React
> Render a list of item and applying that knowledge to fetched data from a remote API

```
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
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>

      <hr/>

      {/*rendering list*/}

      <ul>
        {list.map((item)=>{
          return <li key={item.objectID}>{item.title}</li>
        })}

      </ul>
      {/*and by the way: that's how you do coments in JSX*/}
    </div>
  )
}

export default App;

```
> By assigning a key attribute to each list items element, React can identify items if the list changes (eg re-ordering). The `key` isn't necessary yet in our current situation, however, it's a best practice to use it from the start. 

> We avoid using the index of item in the array to make sure the key attributes is a stable identifier. If the list changes it's order, for example, React will not be able to identify the item properly when using the array's index.

> Using the index as identifier

```
....

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
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>

      <hr/>

      {/*rendering list*/}

      <ul>
       {list.map((item,index)=>{
         return <li key={index}>{item.title}</li>
       })}

      </ul>
      {/*and by the way: that's how you do coments in JSX*/}

    </div>
  )
}
```
> Experimenting with displaying more of the items's properties.

```
function App(){
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>

      <hr/>

      {/*rendering list*/}

      <ul>
        {
          list.map((item)=>{
            return (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li>
              
            )
          })
        }
      </ul>
      {/*and by the way: that's how you do comments in JSX*/}
    </div>
  )
}
```
> `Lists and Keys` keys help react identiy which items have changed, are added, or are removed. Keys should be give to the elements inside the array to give the elements a stable identity;
> The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
> When you don't have stable IDs for rendered items, you may use the item index as a key as last resort
> Not recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
> Keys must only be unique among siblings.

### Meet another React Component
> Components are the foundation of every React application. So far we've only been using the App component.This will not end well, because components should scale with your application's size.
>So instead of making one component larger and more complex, we'll split one component into multiple components eventually.
> We'll start with a new List component which extracts functionalities from the App component.

```
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
      <h1> Meet another React Component</h1>
      <hr></hr>
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

export default App;
```

> Then the new List component can be used in the App component where we have been using the inlined functionality previously:

```
...
function App(){
  return (
    <div>
      <h1> Meet another React Component | Hacker Stories</h1>
      <hr></hr>

      <List />


    </div>
   
  )
}
...
```

> With this example in mind, we can see how components encapsulate meaningful tasks while contributing to the greater good of a larger React application. Extracting a component is a task that you will perform very often as a React developer because it's always the case that a component will grow in size and complexity. Let's do this extraction of a component one more time for a so-called Search component.

```
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
```
> Finally, we have three components in our application: App, List and Search. Generally speaking, a React application consists of may hierachical components; which we can put into the following categories:
![meet other components](./src//imgs/components.png)

> React applications have `components hierachies` (also called component trees)
> There is usually one uppermost entry point component (e.g App) that spans a tree of components below it.
> App` is a parent component of 'List and Search`, which they are `child component`, and `sibling components` to each other.
> Components that don't render any other components are called `leaf components` (e.g List/Search) components.
> All components can have zero, one or many child components.



## Summary