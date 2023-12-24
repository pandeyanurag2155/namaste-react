import React from "react";
import ReactDOM from "react-dom/client";

 


const parent = React.createElement(
    "div",
    { id: "parent" },[
        React.createElement(
            "div",{ id: "child" }, [
            React.createElement( "h1", {}, "this is namaste  react"),
            React.createElement("h2",{},"I am anurag shankar ")
        ]),  React.createElement(
            "div",{ id: "child2" }, [
            React.createElement( "h1", {}, "I am an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag")
        ]),
    ]);

console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// manipulate the DOM using REACT
// const heading=React.createElement("h1",
// {id:"heading" , xyz:"xyz"},
// "Hello World from React!");
// console.log(heading) //object

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);