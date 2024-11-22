// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../styles/globals.css'; // Your global styles
import { useEffect } from 'react';
import TopHeader from "../components/commonComponent/topHeader";
import Navbar from "../components/commonComponent/navbar";
import Footer from "../components/commonComponent/footer";
import '../styles/Home.module.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
 
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="main-body">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
