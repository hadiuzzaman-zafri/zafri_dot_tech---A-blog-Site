import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Singin from './pages/Singin';  
import Singup from './pages/Singup';
import Zafri from './pages/Zafri';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Singin />} />
        <Route path='/sign-up' element={<Singup />} />
        <Route path='/zafri' element={<Zafri />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}