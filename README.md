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

> React applications have `components hierarchies` (also called component trees)
> There is usually one uppermost entry point component (e.g App) that spans a tree of components below it.
> App` is a parent component of 'List and Search`, which they are `child component`, and `sibling components` to each other.
> Components that don't render any other components are called `leaf components` (e.g List/Search) components.
> All components can have zero, one or many child components.

### React Component Instantiation
> Next, I'll be explain Javascript classes, to help clarify React components.
> Classes are most often used in object-oriented programming languages. Javascript, always flexible in its programming paradigms, allows functional programming and object-oriented programming to co-exist side-by-side.
> To recap Javascript classes for object-oriented programming,consider the following Developer class:

```
class Developer{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.firstName + ' ' + this.lastName;
  }
  
}

```

> Each class has a constructor that takes argument and assigns them to the class instance.
> Defining the Developer class is just one part; instantiating it is the other.
> If a Javascript class definition exists, one can create `multiple instances of it`.

```
//class definition
class Developer{ ... }

//class instantiation
const robin = new Developer('Joseph', 'Muganga')

console.log('robin.getName());
//"Joseph Muganga"

//another class instantiation
const mungi = new Developer('Mungi','Buhkay')

console.log(mungi.getName())
//"Mungi Buhkay"
```

> The concept of class definition and instantiation is similar to a React component, which also has only one component definition, but can have multiple component instances:

```
//definition of App component
function App(){
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      {/* creating an instance of List component */}
      <List />
      {/*creating another instance of List component*/}
      <List />

    </div>
  )
}

//definition of List component
function List() { ... }

```

> Once we've defined a component, we can use it as an HTML element anywhere in our JSX.
> The element produces a component instance of your component, or in other words, the component get instantiated.
> However, technically a `Javascript class and React component` are not the same, just their usage makes it convenient to demonstrate their similarities.

#### React Components, Elements and Instances

### React DOM
> Now that we've learned about component definitions and their instantiation, we can move to the App component's instantiation. It has been in our application from the start, in the src/index.js file.

```
src/index.js
...
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
> Next to React which is imported from `react`, there is another imported library called `react-dom`, in which a `ReactDOM.render()` function uses an HTML node to replace it with JSX.
>Essentially that's everything needed to integrate React into any application which uses HTML. In more detail, ReactDOM.render() expects two arguments, the first  is to render the JSX. It creates an instance of your App component, though it can also pass simple JSX without any component instantiation:

#### [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
> Elements are the smallest building blocks of React app.
> An element describes what you want to see on the screen:

```
const element = <h1>Hello, world</h1>
```

> Elements are what components are 'made of".

##### Rendering an Element into the DOM

Let's say there is a <div> somewhere in your HTML file:

```
<div id="root"></div>
```
> We call this a "root" DOM node because everything inside it will be manged by React DOM.
> Applications build with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
> To render a React element, first pass the DOM element to React.DOM.createRoot(), then pass the React element to root.render()

```
const root = RectDOM.createRoot(document.getElementById('root'));
const element = <h1>Hello, world</h1>
root.render(element)
```

##### Updating the Render Element
> React elements are immutable. Once you create an element, you can't change it's children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
> With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render()

```
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element)
}

setInterval(tick,1000)
```
> it calls root.render() every second from a setInterval() callback

##### React Only Updates What's Necessary
>React DOM compares the elements and its children to the previous one, and only applies the DOM updates necessary to bring hte DOM to the desired state.




## Summary