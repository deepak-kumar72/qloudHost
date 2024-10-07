import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopHeader from './components/commonComponent/topHeader';
import Navbar from './components/commonComponent/navbar';
import Footer from './components/commonComponent/footer';
import Home from './components/homeComponent/home';
import OffshoreVps from './components/offShoreVps/offshoreVps';
import DedicatedServer from './components/dedicatedServer/dedicatedServer';
import Streaming from './components/streamingServer/streaming';

function App() {
  return (
   <Router>
   <TopHeader/>
   <Navbar/>
   <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/offshoreVps" element={<OffshoreVps/>} />
          <Route path="/dedicated-Server" element={<DedicatedServer/>}/>
          <Route path="/streaming-server" element={<Streaming/>}/>
        </Routes>
      </div>

   <Footer/>
   </Router>
  );
}

export default App;
