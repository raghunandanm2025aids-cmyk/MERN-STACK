import Login from './pages/login'
import Projects from './pages/Projects'
import Tasks from './pages/tasks'
import Calendar from './pages/calender'
import Client from './pages/client'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import Team from './pages/team'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  
  
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/calender' element={<Calendar/>}/> 
      <Route path='/client' element={<Client/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/team' element={<Team/>}/> 
      </Routes>
    </BrowserRouter>
  
    
    
    
  )
}

export default App