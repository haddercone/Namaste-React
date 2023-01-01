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

const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

const h1 = React.createElement("h1", { id: "key" }, "Heading 1");

const h2 = React.createElement("h2", { id: "key" }, "Heading 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
