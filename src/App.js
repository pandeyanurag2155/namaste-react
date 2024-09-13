import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// // React Element(object)=> HTML(Browser Understand)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "this is namaste react "),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),

//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

// const header = React.createElement(
//   "div",
//   { class: "title" },
//   React.createElement(
//     "h1",
//     {},
//     "heading 1",
//     React.createElement(
//         "h2",
//          {},
//          "heading2",
//         React.createElement(
//             "h3",
//             {},
//             "heading 3",
//         ))
//   )
// );
// //JSX

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "Hello world from React!"
// // );
// // console.log(heading);
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//React element =>object =>HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React"
//   );

// console.log(heading)

//jsx-HTML-like or XML-like syntax
//React element

// const elem=<span>React element</span>
// const jsxHeading = (
// <h1 className="head" tabIndex="5">
// {elem}
// Namaste React using Jsx
// </h1>
// );

// const NavHeader =()=> (
//   <div className="title">
//     <h1>
//       heading 1
//       <h2>
//         heading 2<h3>heading 3</h3>
//       </h2>
//     </h1>
//   </div>
// );










// not using keys (not acceptable) <<<< index <<<< unique id


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using Jsx
  </h1>
);

//React Component
//class Based component - old way of writing code
//functional component - New way of writing code

//React Functional Component
//component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);
root.render(<AppLayout />);
// root.render(header);
