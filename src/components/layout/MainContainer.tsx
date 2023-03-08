import React from "react";
import cls from "./MainContainer.module.css";

export default function MainContainer({ children }: any) {
  return (
    <div className={cls.MainContainer}>
      <div className={cls.MainContainer__inner}>{children}</div>
    </div>
  );
}
