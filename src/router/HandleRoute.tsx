import AllProducts from '@pages/AllProducts';
import { ProductDetails } from '@pages/ProductDetails';
import { AppRoutesEnum } from '@typings/common';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
const HandleRoute = () => {

  return (
    <Routes>
      <Route element={<AuthGuard/>}>
          <Route path={AppRoutesEnum.ROOT} element={<AllProducts/>} />
          <Route path={AppRoutesEnum.SINGLE_PRODUCTS+'/:id'} element={<ProductDetails/>} />
          <Route path="*" element={<Navigate to={AppRoutesEnum.ROOT} />} />
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
