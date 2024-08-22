import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import { StrictMode } from 'react';
import Hom from './Control/Hom/Hom.jsx'
import Abou from './Control/Abou/Abou.jsx'
import Contac from './Control/Contac/Contac.jsx'
import Lay from './Lay';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Lay/>}>
      <Route path='' element={<Hom/>} />
      <Route path='about' element={<Abou/>} /> 
      <Route path='contact' element={<Contac/>} />
    </Route>  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)