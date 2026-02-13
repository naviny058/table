import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function DashboardLayout() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('table')

  function handleOnClickTable() {
    setCurrentPage('form')
    navigate('userTable')
  }
  function handleOnClickForm() {
    setCurrentPage('table')
    navigate('userForm')
  }
  return (
    <div className='flex h-screen  container mx-auto'>

      <aside className='w-52 bg-white'>
        <Sidebar />
      </aside>

      <main className='flex-1 p-4'>
        <div className='flex gap-4 bg-gray-500 rounded-md w-fit py-2 px-4 my-4'>
          <span onClick={handleOnClickTable} className={`${currentPage === 'form' ? "bg-white" : ""} py-2 px-4 rounded-md hover:cursor-pointer`}>Account</span>
          <span onClick={handleOnClickForm} className={`${currentPage === 'table' ? "bg-white" : ""} py-2 px-4 rounded-md hover:cursor-pointer`}>Creates</span>
        </div>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout