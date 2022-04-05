import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Error from './component/Error'
import Update from './component/Update'
import Index from './component/Index'
import Show from './component/Show'
import New from './component/New'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/:id" element={<Show/>} />
        <Route path="/:id/update" element={<Update/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*"  element={<Error/>}/> 
      </Routes>
    </Router>
  )
}


