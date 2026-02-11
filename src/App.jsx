import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import UserTable from './pages/UserTable'
import UserForm from './pages/UserForm'
import DashboardLayout from './layout/DashboardLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/userTable" replace />} />
          <Route path="/userTable" element={<UserTable />} />
          <Route path="/userForm" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
