import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import './App.css';
import Project from "./pages/project/project";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from "./pages/resume/resume";


function App() {
  return(
    <div className="App">
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <Project/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/resume' element = {<Resume/>}/>
        <Route path='/project' element = {<Project/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Resume/> */}
    </div>
 )
}
export default App;