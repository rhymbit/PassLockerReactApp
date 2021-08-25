import React from "react";
import MyFooter from "../Layout/MyFooter";
import MyHeader from "../Layout/MyHeader";
import MyNavbar from "../Layout/MyNavbar";

export default function HomePage() {
  return (
    <div>
      <MyNavbar />
      <MyHeader />
      <MyFooter />
    </div>
  )
}