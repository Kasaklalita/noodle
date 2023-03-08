import React from "react";
import logo from "../assets/logo.svg";
import MainContainer from "./layout/MainContainer";

export default function MainHeader() {
  return (
    <div className="w-full  h-20 border-b border-[#F2F2F2]">
      <MainContainer>
        <div className="flex items-center gap-10">
          <img className="h-20" src={logo} alt="" />
          <p>Москва</p>
          <p>+7(123)4567890</p>
        </div>
      </MainContainer>
    </div>
  );
}
