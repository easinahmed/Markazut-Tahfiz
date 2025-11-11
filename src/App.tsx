import {  createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home }
    ],
  },
]);;

const App:React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App