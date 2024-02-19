//core react without JSX
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1"),
    React.createElement("h2", {}, "H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1"),
    React.createElement("h2", {}, "H2"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
