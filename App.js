import React from "react";
import ReactDOM from "react-dom/client";

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

const elem=<span>React element</span>
const jsxHeading = (
<h1 className="head" tabIndex="5">
{elem}
Namaste React using Jsx
</h1>
);
// const Title = ()=> (
//      <h1 className="head" tabIndex="5">
//      Namaste React using Jsx
//      </h1>
//      );

//React Component
//class Based component - old way of writing code
//functional component - New way of writing code

//React Functional Component
//component composition
const HeadingComponent = () =>(
    <div id ="container">
    {/* <Title /> */ jsxHeading}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
