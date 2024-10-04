import React, { createRoot } from "react-dom/client";
import HourlyRateDashboardView from "./components/HourlyRateDashboardView";
import SecureAppInfoSection from "./components/SecureAppInfoSection";
import { mockData } from "./mockData";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecureAppInfoSectionFilled from "./pages/SecureAppInfoSectionFilled";
import DynamicProfileSectionD from "./components/DynamicProfileSectionD";


const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HourlyRateDashboardView {...mockData} />} />
        <Route path="/auth" element={<SecureAppInfoSection />} />
        <Route path="/auth-filled" element={<SecureAppInfoSectionFilled />} />
        <Route path="/reg" element={<DynamicProfileSectionD />} />
      </Routes>
    </BrowserRouter>
  
);
