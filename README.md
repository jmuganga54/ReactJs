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

## Summary