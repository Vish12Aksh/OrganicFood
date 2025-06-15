

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Button } from '@material-tailwind/react'
import React from 'react'
import HomePage from "./pages/home/HomePage";
import Nopage from "./pages/nopage/Nopage";
import Productinfo from "./pages/productinfo/Productinfo";
import ScrollTop from "./component/scrollTop/ScrollTop";
import CardPage from "./pages/card/CardPage";
import AllProduct from "./pages/allproduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./component/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast"
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";


const App = () => {
  return (
<MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productinfo/:id" element={<Productinfo />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element ={<CategoryPage/>}/>

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />

          <Route path="/Admin-Dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />

          <Route path="/addproductpage" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />

          <Route path= "/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
