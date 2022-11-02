import { Bg } from "../../components/Bg/Bg";
import { Logo } from "../../components/Logo/Logo";
import { Navbar } from "../../components/Navbar/Navbar";
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
