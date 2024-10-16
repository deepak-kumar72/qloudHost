import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TopHeader from "./components/commonComponent/topHeader";
import Navbar from "./components/commonComponent/navbar";
import Footer from "./components/commonComponent/footer";
import Home from "./components/homeComponent/home";
import OffshoreVps from "./components/offShoreVps/offshoreVps";
import DedicatedServer from "./components/dedicatedServer/dedicatedServer";
import Streaming from "./components/streamingServer/streaming";
import ChatNow from "./components/commonComponent/chatNow";
import OffShorewebHosting from "./components/offShoreHosting/offShore-webHosting";
import OffshoreWordPressHosting from "./components/offshoreWordpressHosting/offshoreWordPressHosting";
import OffshoreVideoHosting from "./components/videoHosting/offshoreVideoHosting";
import AdultHosting from "./components/adultHosting/adultHosting";
import DmcaIgnoredVps from "./components/dmcaIgnoredVps/dmcaIgnoredVps";
import NeitherLandOffshoreVps from "./components/neitherlandOffshoreVps/neitherLandOffshoreVps";
import HighPerformanceVps from "./components/highPerformanceVps/highPerformanceVps";
import DmcaDedicatedServer from "./components/dmcaDedicatedServers/dmcaDedicatedServer";
import RussiaDedicatedServer from "./components/russiaDedicatedServer/russiaDedicatedServer";
import NetherlandStreamingServer from "./components/netherlandStreamingServer/netherlandStreamingServer";
import DedicatedServerNetherland from "./components/dedicatedServerNetherland.js/dedicatedServerNetherland";
import WindowsRdp from "./components/windowsRdp/windowsRdp";
import Coupons from "./components/coupons/coupons";
import Affiliate from "./components/affiliate/affiliate";
import PrivacyPolicy from "./components/privacyPolicy/privacyPolicy";
import Terms from "./components/terms/terms";
import FairUsage from "./components/fairUsage/fairUsage";
import Refund from "./components/refundPolicy/refund";
import ReportAbuse from "./components/reportAbuse/reportAbuse";
import About from "./components/aboutQloudhost/about";
import Contactus from "./components/contactUs/contactus";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="main-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/offshore-vps-hosting/" element={<OffshoreVps />} />
          <Route
            path="/offshore-dedicated-servers/"
            element={<DedicatedServer/>}
          />
          <Route path="/streaming-server" element={<Streaming />} />
          <Route
            path="/offshore-web-hosting/"
            element={<OffShorewebHosting />}
          />
          <Route
            path="/offshore-wordpress-hosting/"
            element={<OffshoreWordPressHosting />}
          />
          <Route
            path="/offshore-video-hosting/"
            element={<OffshoreVideoHosting />}
          />
          <Route path="/adult-hosting/" element={<AdultHosting />} />
          <Route path="/dmca-ignored-vps/" element={<DmcaIgnoredVps />} />
          <Route
            path="/offshore-vps-hosting/netherlands/"
            element={<NeitherLandOffshoreVps />}
          />
          <Route
            path="/high-performance-vps-hosting/"
            element={<HighPerformanceVps />}
          />
          <Route
            path="/dmca-ignored-dedicated-servers/"
            element={<DmcaDedicatedServer />}
          />
          <Route
            path="/offshore-dedicated-servers/russia/"
            element={<RussiaDedicatedServer />}
          />
          <Route
            path="/offshore-streaming-server/netherlands/"
            element={<NetherlandStreamingServer />}
          />
          <Route
            path="/offshore-dedicated-servers/netherlands/"
            element={<DedicatedServerNetherland />}
          />
          <Route
            path="/offshore-vps-hosting/windows-rdp/"
            element={<WindowsRdp />}
          />
          <Route path="/coupons/" element={<Coupons />} />
          <Route path="/affiliates/" element={<Affiliate />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/fair-usage-policy/" element={<FairUsage />} />
          <Route path="/refund/" element={<Refund />} />
          <Route path="/report-abuse/" element={<ReportAbuse/>} />
          <Route path="/about/" element={<About/>} />
          <Route path="/contact-us/" element={<Contactus/>} />
        </Routes>
      </div>
      {/* Hide ChatNow component if the current path is '/coupons/' */}
      {location.pathname !== "/coupons/" &&
        location.pathname !== "/privacy-policy/" &&
        location.pathname !== "/terms/" &&
        location.pathname !== "/refund/" &&
        location.pathname !== "/report-abuse/" &&
        location.pathname !== "/about/" &&
        location.pathname !== "/fair-usage-policy/" && <ChatNow />}
      <Footer />
    </>
  );
}

export default App;
