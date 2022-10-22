import "./App.css";
import "./assets/styles/main.sass";
import { Navbar } from "./components/Navbar";
import logo from "./assets/images/logo.svg";
import { Copyright } from "./components/Copyright";

function App() {
  return (
    <>
      <div className="page-bg"></div>
      <Navbar />
      <img src={logo} alt="" className="logo-star" />
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

export default App;
