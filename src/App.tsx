import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drop from "./pages/drop-targets";
import NotFound from "./pages/NotFound";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoices/invoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drop />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
