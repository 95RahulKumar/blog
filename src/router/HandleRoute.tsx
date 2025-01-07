import Home from '@components/Home'
import { Typography } from '@components/Typography'
import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
const HandleRoute = () => {


    


  return (
    
    <Routes>
    <Route element={<AuthGuard/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/typograpy' element={<Typography/>} />
    </Route>
    {/* <Route path='/login' element={<Login/>}/> */}
  </Routes>
 
  )
}

export default HandleRoute

function AuthGuard() {
    const token = true
    return token ? <Outlet /> : <Navigate to="/login" />;
  }
