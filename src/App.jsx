import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CustomerPage from './pages/CustomerPage'
import AddCustomer from './pages/AddCustomer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<CustomerPage/>} />
          <Route path="/customerpage" element={<CustomerPage/>} />
          <Route path="/addcustomer" element={<AddCustomer/>} />
        </Routes>
    </>
  )
}

export default App
