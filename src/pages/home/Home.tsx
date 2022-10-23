import logo from "../../assets/images/logo.svg";
import { Copyright } from "../../components/Copyright";
import { Navbar } from "../../components/Navbar";

export function Home() {
  return (
    <>
      <div className="page-bg"></div>
      <Navbar />
      <div className="logo-star-container">
        <img src={logo} alt="" className="logo-star" />
      </div>
      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <Copyright />
      </div>
    </>
  );
}
