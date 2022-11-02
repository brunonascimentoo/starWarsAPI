import logo from "../../assets/images/logo.svg";
import { Bg } from "../../components/Bg";
import { Logo } from "../../components/Logo/Logo";
import { Navbar } from "../../components/Navbar";
import "./styles.css";

export function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <div className="logo-star-container">
        <Logo />
        <p className="copy-style">&copy; 2022 Copyright: Bruno Nascimento</p>
      </div>
    </>
  );
}
