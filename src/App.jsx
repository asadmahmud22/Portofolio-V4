import React from 'react'  // ← TAMBAHKAN BARIS INI
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Portfolio = lazy(() => import('./pages/Portfolio'))
const AdminLogin = lazy(() => import('./pages/AdminLogin'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App