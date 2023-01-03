## 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

```
const header = React.createElement(
  'div',
  {
    className:"title",
  },
  [
    React.createElement(
      'h1',
      {key:'h1'},
      'this is h1 tag'

    ),
    React.createElement(
      'h2',
      {key:'h2'},
      'this is h2 tag'

    ),
    React.createElement(
      'h3',
      {key:'h3'},
      'this is h3 tag'

    )
  ]
)

root.render(header)
```

## 2. Create the same element using JSX :
```
const header = <div className='title'>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  </div>
  
root.render(header)
```

## 3. Create a functional component of the same with JSX.

```
function Header() {
  return (
    <>
      <div className="title">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    </>
  );
}

root.render(<Header />);
```

## 4. Pass attributes into the tag in JSX
```
function Header() {
  return (
    <>
      <div className="title">
        <h1 style ={{color:"red"}}>h1</h1>
        <h2 style ={{color:"yellow"}}>h2</h2>
        <h3 style ={{color:"green"}}>h3</h3>
      </div>
    </>
  );
}

root.render(<Header />);
```

## 5. Composition of Component(Add a component inside another)
```
function SubComponent(){
  return <p>SubComponent</p>
}

function Component(){
  return (
    <>
      <p>Component</p>
      <SubComponent />
    </>
  );
}

root.render(<Component />);
```


## 6. Header component and styling
1. App.js
```
import './App.css'
import logo from './static/logo.jpg'
function Header() {
  return (
    <header className="header">

      <div id="logo">
      <img src={logo} className="logo" alt="logo"/>
      </div>
      <div id="search">
      <input type='text'  className='search' placeholder="Search..." autofocus="true"/>
      </div>
      <div id="icon">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"/></svg>

      </div>
    </header>
  );
}

root.render(<Header />)
```

2. App.css

```
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.header{
    background-color:#7446a9;
    height: 70px;
    padding:25px;
    display:flex;
    justify-content:space-around;
    align-items:center;
}
#logo, #icon {
    cursor:pointer;
    flex-grow: 1;
    text-align:center;
}
.logo, .icon{
    width:2rem;
    height:2rem;
}
.icon{
    color:#fff;
}
#search {
    flex-grow:2;
}
.search {
    width: 100%;
    padding: 0.5rem 1rem;
    outline:none;
    border:2px solid transparent;
    border-radius:2rem;
}
.search:focus{
    transition:.5s ease-in;
    border:2px solid rgb(87, 35, 198);
}

```
App link [here](https://tiny-cannoli-8fbfff.netlify.app/)
