import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Bills } from './pages/Bills';
import { BillDetail } from './pages/BillDetail';
import { DisputeResolution } from './pages/DisputeResolution';
import { Family } from './pages/Family';
import { Calendar } from './pages/Calendar';
import { Pharmacy } from './pages/Pharmacy';
import { Records } from './pages/Records';
import { Settings } from './pages/Settings';
import { Onboarding } from './pages/Onboarding';
export function App() {
  return <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bills" element={<Bills />} />
          <Route path="bills/:id" element={<BillDetail />} />
          <Route path="bills/:id/dispute" element={<DisputeResolution />} />
          <Route path="family" element={<Family />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="records" element={<Records />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>;
}