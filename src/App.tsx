import {  createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import NoticePage from "./pages/NoticePage";
import Departments from "./pages/Departments";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "notice", Component: NoticePage },
      { path: "departments", Component: Departments },
    ],
  },
  { path: "*", Component: ErrorPage },
]);;

const App:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App