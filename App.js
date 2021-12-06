import './App.css';
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home';
import UserList from './pages/userlist/UserList';
import User from './pages/user/User';
import Product from './pages/products/Product';
import NewProduct from './pages/newproduct/NewProduct';
import ProductList from './pages/productlist/ProductList';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NewUser from './pages/newuser/NewUser';

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/users" element={<UserList/>}/>
    <Route path="/users/:userId" element={<User/>}/>
    <Route path="/newuser" element={<NewUser/>}/>
    <Route path="/productList" element={<ProductList/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/newproduct" element={<NewProduct/>}/>
    </Routes>
    </div>  
    </Router>
  );
}

export default App;
