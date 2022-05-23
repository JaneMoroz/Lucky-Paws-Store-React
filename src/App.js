import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Account, Error, Home, Page } from "./pages/";
import { Navbar } from "./components/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="account" element={<Account />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
