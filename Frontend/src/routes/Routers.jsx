
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Prediction  from '../pages/Prediction'
import Experts from '../pages/Experts/Experts'
import ExpertsDetails from '../pages/Experts/ExpertsDetails'
import Cars from '../pages/Cars/Cars'
import RentCar from '../pages/Cars/RentCar'

import {Routes,Route } from 'react-router-dom'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home " element={<Home/>} />
    <Route path="/experts" element={<Experts/>} />
    <Route path="/experts/:id" element={<ExpertsDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/prediction" element={<Prediction/>} />
    <Route path="/cars" element={<Cars/>} />
    <Route path="/rentcar" element={<RentCar/>} />
  </Routes>
};

export default Routers;