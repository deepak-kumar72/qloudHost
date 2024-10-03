import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopHeader from './components/commonComponent/topHeader';
import Navbar from './components/commonComponent/navbar';
import Footer from './components/commonComponent/footer';
import Home from './components/homeComponent/home';

function App() {
  return (
   <Router>
   <TopHeader/>
   <Navbar/>
   <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>

   <Footer/>
   </Router>
  );
}

export default App;
