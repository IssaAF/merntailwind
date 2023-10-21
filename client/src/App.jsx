import { BrowserRouter,Routes,Route } from "react-router-dom"


import  Home from './pages/Home';
import  About from './pages/About';
import  SignIn from './pages/SignIn';
import  SignUp from './pages/SignUp';
import  Profile from './pages/Profile';
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/sign-in"  element={<SignIn/>}/>
          <Route path="/signup"  element={<SignUp/>}/>
          <Route path="/about-us"  element={<About/>}/>
          <Route path="/profile"  element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

/***https://tailwindcomponents.com/cheatsheet/ */