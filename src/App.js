import './App.css';
import Header from './pages/Shared/Header';
import Footer from './pages/Shared/Footer'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/Shared/NotFound';
import Chekout from './pages/Chekout/Chekout';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/chekout" element={
          <RequireAuth>
            <Chekout></Chekout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
