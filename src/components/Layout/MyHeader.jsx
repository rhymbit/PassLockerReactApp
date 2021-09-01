import React from "react";
import { Image } from "react-bootstrap";
import logo from "../../images/logo.svg";

export default function MyHeader() {
  return (
    <header>
      <Image className="logo" src={logo} fluid/>
      <h1>PassLocker</h1>
    </header>
  )
}