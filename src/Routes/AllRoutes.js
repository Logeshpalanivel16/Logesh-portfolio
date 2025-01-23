import { BrowserRouter, NavLink, Route, Router, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
export function AllRoutes(){
    return(
        <>
        <Routes>
            <Route
          path="/"
          element={

            <HomePage />
            
          }></Route>

        </Routes>
        </>
    )

}