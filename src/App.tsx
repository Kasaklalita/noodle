import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <MainHeader />
    </div>
  );
}

export default App;
