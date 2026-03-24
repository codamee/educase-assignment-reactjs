import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './components/Welcome.jsx'
import Create from './components/Create.jsx'
import Signin from './components/Signin.jsx'
import Account from './components/Account.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/create",
    element: <Create />
  },
  {
    path: "/sigin",
    element: <Signin />
  },
  {
    path: "/account",
    element: <Account />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
