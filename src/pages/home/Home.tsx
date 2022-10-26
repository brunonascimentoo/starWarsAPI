import logo from "../../assets/images/logo.svg";
import { Bg } from "../../components/Bg";
import { Navbar } from "../../components/Navbar";
import "./styles.css";

export function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <div className="logo-star-container">
        <img src={logo} alt="" className="logo-star" />
        <p className="copy-style">&copy; 2022 Copyright: Bruno Nascimento</p>
      </div>
    </>
  );
}
