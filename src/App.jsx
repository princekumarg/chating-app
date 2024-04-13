import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Room from './pages/Room'
import { AuthProvider } from './utils/AuthContext'
import RegisterPage from './pages/RegisterPage'
import PrivateRoutes from './utils/PrivateRoutes'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Room/>}/>
            </Route>
          </Routes>
        </AuthProvider>
        
      </BrowserRouter>
    
  )
}

export default App
