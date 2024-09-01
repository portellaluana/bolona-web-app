import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserSelectionProvider } from "./context/UserSelectionContext";
import Home from "./pages/Home/Home";
import Base from "./pages/Base/Base";
import Flavor from "./pages/Flavor/Flavor";
import Extra from "./pages/Extra/Extra";
import OrderSummary from "./pages/Summary/OrderSummary";
import Order from "./pages/Order/Order";

const App: React.FC = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        (error) => {
          console.log("ServiceWorker registration failed: ", error);
        }
      );
    });
  }

  return (
    <UserSelectionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base />} />
          <Route path="/flavor" element={<Flavor />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </UserSelectionProvider>
  );
};

export default App;
