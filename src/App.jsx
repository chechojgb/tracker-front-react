// App.jsx
import React from 'react';
import Layout from './components/Layout/Layout';
import { Card, Table, Badge } from 'flowbite-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import RealTime from './pages/RealTime';
import ReportsPage from './pages/Report';
import AnalyticsPage from './pages/Analytics';
import Privacy from './pages/Privacy';
import Configuration from './pages/Configuration';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<RealTime />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<Configuration />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;