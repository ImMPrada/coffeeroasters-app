import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/create-plan",
    element: <div>Create plan!</div>,
  },
]);

function App() {
  return (
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
