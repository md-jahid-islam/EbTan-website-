
 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
 import './App.css'
 import Home from './Pages/Home'
 import About from './Pages/About'
 import Shop from './Pages/Shop'
 import Contact from './Pages/Contact'
 import LayoutsOne from './Layouts/LayoutsOne'
 function App() {
 const mainroute = createBrowserRouter(
 createRoutesFromElements(
  <Route>
    <Route path='/' element = {<LayoutsOne/>}>
    <Route index element = {<Home/>} />
    <Route path='/about' element = {<About/>} />
    <Route path='/shop' element = {<Shop/>} />
    <Route path='/contact' element = {<Contact/>} />
    
    
    
    </Route>

   </Route>
   )
   )

   return (
    <>
    <RouterProvider router={mainroute}/>

    </>
   )
   }

   export default App
