import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import APage from "./pages/APage";
import BPage from "./pages/BPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<APage />} />
        <Route path="/b" element={<BPage />} />
      </Routes>
    </BrowserRouter>
  );
}
