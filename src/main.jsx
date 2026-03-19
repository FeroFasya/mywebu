import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 1. Panggil Pasukan dari Brankas Admin
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddService from './pages/Admin/AddService'
import EditService from './pages/Admin/EditService'
import TestimonialAdmin from './pages/Admin/TestimonialAdmin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rute Utama (Website MyWebu Asli untuk Klien) */}
        <Route path="/" element={<App />} />
        
        {/* Rute Rahasia Bos Fero (Admin Area) */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddService />} />
        <Route path="/admin/edit/:id" element={<EditService />} />
        <Route path="/admin/testimonials" element={<TestimonialAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)