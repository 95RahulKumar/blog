import AllProducts from '@pages/AllProducts';
import { Typography } from '@pages/Typography'
import { Outlet, Route, Routes } from 'react-router-dom'
const HandleRoute = () => {

  return (
    
    <Routes>
    <Route element={<AuthGuard/>}>
        <Route path='/' element={<AllProducts/>} />
        <Route path='/typograpy' element={<Typography/>} />
    </Route>
    {/* <Route path='/login' element={<Login/>}/> */}
  </Routes>
 
  )
}

export default HandleRoute

function AuthGuard() {
  return <Outlet />;
    // const token = true
    // return token ? <Outlet /> : <Navigate to="/login" />;
  }
