import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App.tsx'
import Home from './routes/Home/Home.tsx';
import Error from './routes/Error/Error.tsx';
import Cadastro from './routes/Cadastro/Cadastro.tsx';
import Login from './routes/Login/Login.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import "./globals.css"


const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/", element: <Home/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path:"/login", element: <Login/>},
      {path:"/integrantes", element:<Integrantes/>},
    ]
  } 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

