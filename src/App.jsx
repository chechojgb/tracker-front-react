// App.jsx
import React from 'react';
import Layout from './components/Layout/Layout';
import { Card, Table, Badge } from 'flowbite-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import RealTime from './pages/RealTime';
import ReportsPage from './pages/Report';
import AnalyticsPage from './pages/Analytics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<RealTime />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;