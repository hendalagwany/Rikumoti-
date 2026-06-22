import React from "react";
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/admin/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;