import React from 'react';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/menu';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Menu/>} />
    </Route>
  )
)

function App() {
  return (
    
     <RouterProvider router={router} />
  );
}

export default App;