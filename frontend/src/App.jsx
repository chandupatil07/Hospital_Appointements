import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
// import MyAppointements from './pages/MyAppointements'   //older
import MyAppointments from './pages/MyAppointments'

import Appoinetment from './pages/Appoinetment' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
     <Routes>
      
       <Route path='/' element={<Home/>}/>
         <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
           <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
       {/* <Route path='/my-appoinements' element={<MyAppointements/>}/> */} //older path 
       <Route path='/my-appointments' element={<MyAppointments/>}/> //newer path according to referrence

        <Route path="/appoinetment/:docId" element={<Appoinetment />} />



      
     </Routes>
      <Footer/>
    </div>
  )
}

export default App
