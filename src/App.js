import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopHeader from './components/commonComponent/topHeader';
import Navbar from './components/commonComponent/navbar';
import Footer from './components/commonComponent/footer';
import Home from './components/homeComponent/home';
import OffshoreVps from './components/offShoreVps/offshoreVps';
import DedicatedServer from './components/dedicatedServer/dedicatedServer';
import Streaming from './components/streamingServer/streaming';
import ChatNow from './components/commonComponent/chatNow';
import OffShorewebHosting from './components/offShoreHosting/offShore-webHosting';
import OffshoreWordPressHosting from './components/offshoreWordpressHosting/offshoreWordPressHosting';
import OffshoreVideoHosting from './components/videoHosting/offshoreVideoHosting';
import AdultHosting from './components/adultHosting/adultHosting';
import DmcaIgnoredVps from './components/dmcaIgnoredVps/dmcaIgnoredVps';
import NeitherLandOffshoreVps from './components/neitherlandOffshoreVps/neitherLandOffshoreVps';
import HighPerformanceVps from './components/highPerformanceVps/highPerformanceVps';
import DmcaDedicatedServer from './components/dmcaDedicatedServers/dmcaDedicatedServer';
import RussiaDedicatedServer from './components/russiaDedicatedServer/russiaDedicatedServer';

function App() {
  return (
   <Router>
   <TopHeader/>
   <Navbar/>
   <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/offshore-vps-hosting/" element={<OffshoreVps/>} />
          <Route path="/offshore-dedicated-servers/" element={<DedicatedServer/>}/>
          <Route path="/streaming-server" element={<Streaming/>}/>
          <Route path="/offshore-web-hosting/" element={<OffShorewebHosting/>}/>
          <Route path="/offshore-wordpress-hosting/" element={<OffshoreWordPressHosting/>}/>
          <Route path='/offshore-video-hosting/' element={<OffshoreVideoHosting/>}/>
          <Route path='/adult-hosting/' element={<AdultHosting/>}/>
          <Route path='/dmca-ignored-vps/' element={<DmcaIgnoredVps/>}/>
          <Route path='/offshore-vps-hosting/netherlands/' element={<NeitherLandOffshoreVps/>}/>
          <Route path='/high-performance-vps-hosting/' element={<HighPerformanceVps/>}/>
          <Route path='/dmca-ignored-dedicated-servers/' element={<DmcaDedicatedServer/>}/>
          <Route path='/offshore-dedicated-servers/russia/' element={<RussiaDedicatedServer/>}/>
        </Routes>
      </div>
   <ChatNow/>
   <Footer/>
   </Router>
  );
}

export default App;
