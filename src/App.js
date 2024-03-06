
import './App.css';
import Admin from './components/admin/Admin';
import PermisionList from './components/admin/PermisionList';
import AddEmployee from './components/admin/AddEmployees';
import EmployeeList from './components/admin/EmployeeList';
import CustomerList from './components/admin/CustomerList';
import RootLayoutAdmin from './components/layouts/rootLayoutAdmin';
import AdminProvider from './components/admin/AdminContext';

import Signup from './components/customer/Signup';
import Nav from './components/aboutAndContact/Nav';
import Home from './components/customer/Home';
import Homepage from './components/aboutAndContact/Homepage';
import Login from './components/customer/Login';
import PaymentPortal from './components/customer/PaymentPortal';
import Cart from './components/order/Cart';
import About from './components/aboutAndContact/About';
import Contact from './components/aboutAndContact/contact';

import DelivetyProvider from './components/delivery/DeliveryContext';
import AddStaff from './components/delivery/AddStaff';
import AssignDelivery from './components/delivery/asignStaff';
import StaffList from './components/delivery/StaffList';
import RootLayoutDelivry from './components/layouts/rootLayoutDelivery';

import RootLayout from './components/layouts/rootLayout';
import Checkout from './components/order/Checkout';
import Order from './components/order/Order';
import CartProvider from './components/order/cartItemContext';
import OrderProcessed from './components/order/orderProcessed';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
          <Route path="/" element={<RootLayout />}>
            <Route path="/home/signin/homepage" element={<Homepage />} />
            <Route path="home/signup" element={<Signup />} />
            <Route path="home/signin" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/home/signin/homepage" element={<Homepage />} />
            <Route path='products' element={ <Order/> }/>
            <Route path="checkout" element={<Checkout />} />
            <Route path="paymentPortal" element={<PaymentPortal />} />
            <Route path="processed" element={<OrderProcessed />} />
            {/* <Route path="admin/addemployee" element={<AddEmployee />} />
            <Route path="admin/employeedetails" element={<EmployeeList />} />
            <Route path="admin/customerdetails" element={<CustomerList />} /> */}
            <Route path="assigndelivery" element={<AssignDelivery />} />
            <Route path="addstaff" element={<AddStaff />} />
            <Route path="staff" element={<StaffList />} />
            <Route path="farm" element={<Farm />} />
          </Route>
          <Route path="admin/*" element={<AdminRoutes />} />
          <Route path="delivery/*" element={<DeliveryRoutes />} />
          <Route path="order/*" element={<OrderRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

function AdminRoutes() {
  return (
    <RootLayoutAdmin>
      <Route index element={<Admin />} />
      <Route path="admin/addemployee" element={<AddEmployee />} />
      <Route path="admin/employeedetails" element={<EmployeeList />} />
      <Route path="admin/customerdetails" element={<CustomerList />} />
    </RootLayoutAdmin>
  );
}

function DeliveryRoutes() {
  return (
    <RootLayoutDelivry>
      <Route index element={<AssignDelivery />} />
      <Route path="assigndelivery" element={<AssignDelivery />} />
      <Route path="addstaff" element={<AddStaff />} />
      <Route path="staff" element={<StaffList />} />
    </RootLayoutDelivry>
  );
}

function OrderRoutes() {
  return (
    <RootLayout>
      <Route path='products' element={ <Order/> }/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/home/signin/homepage" element={<Homepage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="paymentPortal" element={<PaymentPortal />} />
      <Route path="processed" element={<OrderProcessed />} />
    </RootLayout>
  );
}

export default App;
