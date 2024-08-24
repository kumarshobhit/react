import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h2>ruko jara, sabar karo</h2>}>
            <Grocery />,
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const heading = React.createElement("h1", {
//     id:"heading",
//     xyz:"abc"
// }, "Hello World from React")

// console.log(heading) // object

// const ele=<span>React element</span>

// // react element
// const Title=()=>(
//     <div>
//     {ele}
//     <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
//     </div>
// )

// const HeadingComponent=()=>(
//     <div id="container">
//     <Title/>
//     <Title></Title>
//     {Title()}
//     <h1 className="heading">Namaste react functional component</h1>
//     </div>
// )

// const HeadingComponent=()=>{
//     return <h1 className="heading">Namaste react functional component</h1>
// }

// const parent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"},[
// React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")
// ])
// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)

/*
<div id="parent">
<div id="child">
<h1>I am a h1</h1>
<div>
<div>
ReactElement(object)->HTML(browser understands)
 */
