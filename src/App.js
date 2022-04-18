import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/UserAccount/Login/Login';
import Register from './pages/UserAccount/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import CheckOut from './pages/Home/CheckOut/CheckOut';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/course/:courseId' element={
          <CheckOut></CheckOut>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

/**
 * home
 * about
 * blogs
 * login
 * register
 * course/:courseId
 * 404
 */