import { Route, Routes } from "react-router-dom";
import './App.css';
import AddItem from "./Components/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import ForgetPass from "./Components/ForgetPass/ForgetPass";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import Link from "./Components/Link/Link";
import Login from "./Components/Login/Login";
import ManageItem from "./Components/ManageItem/ManageItem";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signup from "./Components/Signup/Signup";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitem" element={<MyItems></MyItems>}></Route>
        <Route path="/forgetpass" element={<ForgetPass></ForgetPass>}></Route>
        <Route path="/manageitem" element={<ManageItem></ManageItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/inventory/:detailId' element={
          <RequireAuth>
            <Link></Link>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
