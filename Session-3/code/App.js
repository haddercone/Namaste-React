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
      <Title /> {/** component composition --> Title component inside HeaaderComponent component */}
      {/* Can also be written as { Title() } */}
      
      <h1> Namaste React functional component </h1>
      <h2>This is a h2 tag </h2>
    </div>
  );
};

// similer to above code


{/**
//can also be written as :

const HeaaderComponent2 = () => (
    <div>
      <h1> Namaste React functional component2 </h1> 
      <h2>This is a h2 tag </h2>
    </div>
  ); 

*/}


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

root.render(<HeaaderComponent />); // can also be written as  root.render(HeaaderComponent());
// root.render(<HeaaderComponent2 />);
