import React from "react";
import { Copyright } from "./Copyright";
import "./Bg.sass";

export function Bg() {
  return (
    <div className="page-bg">
      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      <Copyright />
    </div>
  );
}
