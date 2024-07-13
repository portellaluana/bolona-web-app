import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserSelectionProvider } from "./context/UserSelectionContext";

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

//pra fazer loading
  const Home = lazy(() => import("./pages/Home/Home"));
  const Base = lazy(() => import("./pages/Base/Base"));
  const Flavor = lazy(() => import("./pages/Flavor/Flavor"));
  const Extra = lazy(() => import("./pages/Extra/Extra"));

  return (
    <UserSelectionProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base />} />
          <Route path="/flavor" element={<Flavor />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </Suspense>
    </Router>
    </UserSelectionProvider>
  );
};

export default App;
