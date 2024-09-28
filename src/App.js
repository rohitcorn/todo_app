import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import PasswordGenerator from "./pages/PasswordGenerator";
import PasswordGenerator1 from "./pages/PasswordGenerator1";
import Todo from "./pages/Todo";
import Parent from "./pages/Parent";

function App() {
  const allRoutes = createBrowserRouter(
    [
      {
        path: '/',
        element: <><Header/><Home/></>
      },
      {
        path: '/movies',
        element: <><Header/><Movies/></>
      },
      {
        path: '/passwordgenerator',
        element: <><Header/><PasswordGenerator/></>
      },
      {
        path: '/passwordgenerator1',
        element: <><Header/><PasswordGenerator1/></>
      },
      {
        path: '/todo',
        element: <><Header/><Todo/></>
      },
      {
        path: '/parent',
        element: <><Header/><Parent/></>
      },
    ]
  )
  return (
    <>
      <RouterProvider router={allRoutes} />
    </>
  );
}

export default App;
