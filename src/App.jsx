import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { useState } from "react"
import Acceuil from "./components/Acceuil"
import Pays from "./components/Pays"

export default function App() {
  const [actualObj, setActualObj] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Acceuil setDarkMode={setDarkMode} darkMode={darkMode} actualObj={actualObj} setActualObj={setActualObj} />,
    },
    {
      path: "/country/:pays",
      element: <Pays actualObj={actualObj} setDarkMode={setDarkMode} darkMode={darkMode} />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

