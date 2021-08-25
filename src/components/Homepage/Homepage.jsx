import React from "react";
import MyFooter from "../Layout/MyFooter";
import MyHeader from "../Layout/MyHeader";
import MyNavbar from "../Layout/MyNavbar";
import MainBody from "./MainBody";

export default function HomePage() {
  return (
    <div>
      <MyNavbar />
      <MyHeader />
      <MainBody />
      <MyFooter />
    </div>
  )
}