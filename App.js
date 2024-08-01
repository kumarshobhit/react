// const heading = React.createElement("h1", {
//     id:"heading",
//     xyz:"abc"
// }, "Hello World from React")

// console.log(heading) // object 

const parent = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},[
React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2") 
])
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


/*
<div id="parent">
<div id="child">
<h1>I am a h1</h1>
<div>
<div>
ReactElement(object)->HTML(browser understands)
 */
