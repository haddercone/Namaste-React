const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

const h1 = React.createElement(
  "h1",
  { style: { color: "red" }, id: "key" },
  "I am red"
);

const h2 = React.createElement(
  "h2",
  { style: { color: "green" }, id: "key" },
  "I am green"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  h1,
  h2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
