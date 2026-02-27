import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your components (we will create placeholders for these)
import HomePage from "./pages/HomePage"; 

// Simple placeholder components for other pages
const Academics = () => <div className="p-10 text-white"><h1>Academics & Notes</h1></div>;
const Exams = () => <div className="p-10 text-white"><h1>Sessional & Semester Papers</h1></div>;
const DSA = () => <div className="p-10 text-white"><h1>DSA Learning Path</h1></div>;
const Alumni = () => <div className="p-10 text-white"><h1>Alumni Connection</h1></div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        
        {/* Simple Navigation Bar */}
        <nav className="bg-black border-b border-gray-800 p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-500">dgi-connect</Link>
          <div className="space-x-6 hidden md:flex">
            <Link to="/academics" className="hover:text-blue-400 transition">Academics</Link>
            <Link to="/exams" className="hover:text-blue-400 transition">Exams</Link>
            <Link to="/dsa" className="hover:text-blue-400 transition">DSA</Link>
            <Link to="/alumni" className="hover:text-blue-400 transition">Alumni</Link>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold">Login</button>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>

      </div>
    </Router>
  );
}