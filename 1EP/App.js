/* first program*/
/*
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello from react"
); // react element creatation , {} this object is place ,u will give attributes to ur tag

console.log(heading); //this is a react object with data of props and lots of things,props are combination of chidrens and attributes.
*/

/*
<div id="parent">
    <div id="child">
        <h2></h2>
        <h3></h3> //another sibling of h2.
    </div>
        <div id="child2">
        <h2></h2>
        <h3></h3> //another sibling of h2.
    </div>
</div>
*/

/* second program*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h2", {}, "I am h2 tag"),
        React.createElement("h3", {}, "I am h3 tag"),
      ] // 3rd parameter of create element is children which can be array
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h2", {}, "I am h2 tag child 2"),
        React.createElement("h3", {}, "I am h3 tag child 2"),
      ] // 3rd parameter of create element is children which can be array
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("roott")); // react dom using root creation

root.render(parent); //render the heading inside root


// this is very complex code strcture , so we can use jsx. when it comes to createelements......
//this is core of react when we use .js for element creation.