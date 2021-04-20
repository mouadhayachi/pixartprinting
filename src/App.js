import React from "react";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css"
import "./App.scss";

function App() {
  return (
    <div className="MainApp-mainPage">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
