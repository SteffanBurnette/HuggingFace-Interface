import React from 'react'
import ReactDOM from 'react-dom/client'
//Used to set up the routes and single page navigation
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"


//My Layouts
import RootLayout from "./components/RootLayout"
import LandingPage from "./components/LandingPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element = {<LandingPage />}/>
    <Route path="/" element ={<RootLayout/>}>

    </Route>
    </>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
