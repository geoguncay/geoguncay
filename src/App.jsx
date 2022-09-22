import './app.css'
import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import NotFound from './components/pages/not found/NotFound'
import Projects from './components/pages/projects/Projects'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App