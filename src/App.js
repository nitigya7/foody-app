import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import React, {lazy, Suspense} from "react";

const Grocery = lazy(()=>import("./components/Grocery"));
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
       path: "/",
       element: <Body/>
      },

      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>loading....</h1>}> <Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>
  }

])

export default appRouter;
