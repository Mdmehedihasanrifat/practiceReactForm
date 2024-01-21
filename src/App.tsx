
import { Outlet } from 'react-router-dom'
import './App.css'
import NormalFrom from './components/NormalForm/NormalFrom';

function App() {

  return (
    
    <>
     
    <NormalFrom></NormalFrom>
    
    <Outlet></Outlet>
    </>
  )
}

export default App
