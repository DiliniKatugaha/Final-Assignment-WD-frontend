import './App.css';
import AddEmployee from './components/admin/AddEmployees';
import EmployeeList from './components/admin/EmployeeList';
import CustomerList from './components/admin/CustomerList';
import RootLayoutAdmin from './components/layouts/rootLayoutAdmin';

import Signup from './components/customer/Signup';
import Home from './components/customer/Home';
import Homepage from './components/aboutAndContact/Homepage';
import Login from './components/customer/Login';
import PaymentPortal from './components/customer/PaymentPortal';
import About from './components/aboutAndContact/About';
import Contact from './components/aboutAndContact/contact';

import AddStaff from './components/delivery/AddStaff';
import AssignDelivery from './components/delivery/asignStaff';
import StaffList from './components/delivery/StaffList';
import RootLayoutDelivery from './components/layouts/rootLayoutDelivery';

import RootLayout from './components/layouts/rootLayout';
import Checkout from './components/order/Checkout';
import Order from './components/order/Order';
import OrderProcessed from './components/order/orderProcessed';
import CartProvider from './components/order/cartItemContext';
import Farm from './components/productionStoc/Farm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="home/signin/homepage" element={<Homepage />} />
            <Route path="home/signup" element={<Signup />} />
            <Route path="home/signin" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="order" element={<CartProvider><Order /></CartProvider>} />
            <Route path="order/checkout" element={<CartProvider><Checkout /></CartProvider>} />
            <Route path="/order/paymetPortal" element={<CartProvider><PaymentPortal /></CartProvider>} />
            <Route path="/order/checkout/processed" element={<CartProvider><OrderProcessed /></CartProvider>} />
            <Route path="farm" element={<Farm />} />
            </Route>
          <Route path="admin/*" element={<AdminRoutes />} />
          <Route path="delivery/*" element={<DeliveryRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

function AdminRoutes() {
  return (
    <RootLayoutAdmin>
      <Route index element={<AddEmployee />} />
      <Route path="admin/addemployee" element={<AddEmployee />} />
      <Route path="admin/employeedetails" element={<EmployeeList />} />
      <Route path="admin/customerdetails" element={<CustomerList />} />
    </RootLayoutAdmin>
  );
}

function DeliveryRoutes() {
  return (
    <RootLayoutDelivery>
      <Route index element={<AssignDelivery />} />
      <Route path="delivery/assign" element={<AssignDelivery />} />
      <Route path="delivery/addstaff" element={<AddStaff />} />
      <Route path="delivery/staff" element={<StaffList />} />
    </RootLayoutDelivery>
  );
}



export default App;
