/**
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { key: "1", id: "key" },
  "Hello everyone!"
);

// A React element
const heading2 = (
  <h1 id="h1" key="h1">
    Heading 2
  </h1>
);

// A React component
const Title = () => (
  <h1 id="h1" key="h1">
    Namaste React
  </h1>
);

// React components
// - functional Component - NEW

const HeaaderComponent = () => {
  return (
    <div>
      <Title />{" "}
      {/** component composition --> Title component inside HeaaderComponent component */}
      {/* Can also be written as { Title() } */}
      <h1> Namaste React functional component </h1>
      <h2>This is a h2 tag </h2>
    </div>
  );
};

// similer to above code

{
  /**
//can also be written as :

const HeaaderComponent2 = () => (
    <div>
      <h1> Namaste React functional component2 </h1> 
      <h2>This is a h2 tag </h2>
    </div>
  ); 

*/
}

// - class based Components - OLD

const h1 = React.createElement("h1", { key: "2", id: "key" }, "Heading 1");

const h2 = React.createElement("h2", { key: "3", id: "key" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaaderComponent />); // can also be written as  root.render(HeaaderComponent());
// root.render(<HeaaderComponent2 />);

// Random coding stuff below.....

// const Child1 =(props) => {
//   return (
//     <>
//       <p>Parent ( Child 1 )</p>
//       {props.children}
//     </>
//   )
// }
// const SubChild = (props) => {

//   return (
//     <>
//     {props.children}
//     <p>I'm <code>SubChild</code>, child of &lt;Child1&gt; component</p>
//     </>
//   )
// }
// function SubSubChild() {
//   return <p>I'm  <code>SubSubChild</code> child of &lt;SubChild&gt;</p>
// }
// const ParentComponent =() => {
//   return (
//     <>
//     <Child1>
//       <SubChild> {/** passing  SubChild as a prop to the Child1 component (at line number 102) to render it*/}
//         <p>Random text</p>
//         <SubSubChild /> {/** passing  SubSubChild as a prop to the SubChild component (at line number 110) to render it*/}
//       </SubChild>
//     </Child1>
//     </>
//   );

// }

// root.render(
//   <ParentComponent />
// )

// output :

{
  /*
Parent ( Child 1)

Random text

I'm SubSubChild child of <SubChild>

I'm SubChild, child of <Child1> component

*/
}

// ================================================

// const heading = React.createElement(
//   "h1",
//   {
//     id:"title",
//     className:"heading",
//     style:{color:"red"}
//   },
//   "Namaste React!!!"
// )

// setTimeout(
//   function(){
//     const heading3 = document.getElementById('title');
//     console.log(heading3)
//     heading3.innerHTML = 'Namaste JS'
//   }
//   , 2000)

// root.render(heading)

// ====================================Assignment===============================//
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
// ====================================Assignment Ends==========================//
