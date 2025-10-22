import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Tasks from './pages/Tasks.jsx';
import ApiData from './pages/ApiData.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/api" element={<ApiData />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
