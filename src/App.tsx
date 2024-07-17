import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { UserPage } from './pages/UserPage/UserPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={'auth'} element={<AuthPage />} />
      <Route path={'user'} element={<UserPage />} />
      <Route path={'*'} element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
