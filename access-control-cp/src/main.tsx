import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/Home/Home.tsx';
import Error from './routes/Error/Error.tsx';

const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/", element: <Home/>},
      {path: "/cadastro", element: <Cadastro/>},
      {path:"/login", element: <Login/>},
    ]
  } 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

