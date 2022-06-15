import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Error,
  Home,
  SingleProduct,
  Cart,
  About,
  ProductsPage,
  ProtectedRoute,
} from "./pages/";
import { Navbar } from "./components/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddProduct,
  ManageProducts,
  ManageReviews,
  ManageOrders,
  MyOrders,
  Order,
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
        <Route path="dog" element={<ProductsPage />} />
        <Route path="cat" element={<ProductsPage />} />
        <Route path="all" element={<ProductsPage />} />
        <Route path="about" element={<About />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="account" element={<SharedLayout />}>
          <Route index element={<Settings />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-orders/:id" element={<Order />} />
          <Route path="my-reviews" element={<MyReviews />} />
          <Route
            path="manage-products"
            element={
              <ProtectedRoute>
                <ManageProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-users"
            element={
              <ProtectedRoute>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-reviews"
            element={
              <ProtectedRoute>
                <ManageReviews />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-orders"
            element={
              <ProtectedRoute>
                <ManageOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-orders/:id"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-products/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
