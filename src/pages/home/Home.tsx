import { Bg } from "../../components/Bg/Bg";
import { Logo } from "../../components/Logo/Logo";
import { Navbar } from "../../components/Navbar/Navbar";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import "./styles.css";

export function Home() {
  return (
    <>
      <Bg />
      <Navbar />
      <div className="logo-star-container">
        <Logo />
      </div>
      <footer className="icon-container">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/brunonascimento1996/"
            target={"_blank"}
          >
            <LinkedinLogo size={42} weight="fill" />
          </a>
          <a href="https://github.com/brunonascimentoo" target={"_blank"}>
            <GithubLogo size={42} weight="fill" />
          </a>
        </div>
        <p className="copy-style">&copy; 2022 Copyright: Bruno Nascimento</p>
      </footer>
    </>
  );
}
