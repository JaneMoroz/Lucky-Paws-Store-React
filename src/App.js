import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Error, Home, Page } from "./pages/";
import { Navbar } from "./components/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddProduct,
  ManageProducts,
  ManageReviews,
  ManageOrders,
  MyOrders,
  MyOrder,
  MyReviews,
  Settings,
  SharedLayout,
  ManageUsers,
} from "./pages/account/";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dog" element={<Page />} />
        <Route path="cat" element={<Page />} />
        <Route path="about" element={<Page />} />
        <Route path="all" element={<Page />} />
        <Route path="account" element={<SharedLayout />}>
          <Route index element={<Settings />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-orders/:id" element={<MyOrder />} />
          <Route path="my-reviews" element={<MyReviews />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-reviews" element={<ManageReviews />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-orders/:id" element={<MyOrder />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
