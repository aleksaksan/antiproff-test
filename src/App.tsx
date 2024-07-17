import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import CardPage from './pages/CardPage/CardPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={'auth'} element={<AuthPage />} />
      <Route path={'card'} element={<CardPage />} />
      <Route path={'*'} element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
