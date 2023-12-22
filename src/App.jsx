import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './views/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Register from './views/Register'
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)
  const [dark, setdark] = useState("")
  const [iconMode, setIconmode] = useState(<FaMoon />)
  const darkMode = () => {
      setdark(dark == "" ? "dark" : "");
      setIconmode(dark == "" ? <FaRegSun /> : <FaMoon />);
      dark == "" ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }
  const rutes = [{name: '/Login', element: <Login/>},
  {name: '/', element: <Home/>}, {name: '/*', element: <NotFound/>}, {name: '/Register', element: <Register/>}];
  return (
    <div className='w-screen h-screen'>
      <Routes>
        {rutes.map((rute, index) => (<Route path={rute.name} element={rute.element} />))}
      </Routes>
      <button className='bg-neutral-300 p-5 rounded-full absolute top-7 right-7' onClick={darkMode} >{iconMode}</button>
    </div>
  )
}

export default App
