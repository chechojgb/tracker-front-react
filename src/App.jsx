// App.jsx
import React from 'react';
import Layout from './components/Layout/Layout';
import { Card, Table, Badge } from 'flowbite-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;