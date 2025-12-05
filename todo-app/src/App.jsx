// src/App.jsx
import React from "react";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import Notes from "./components/Notes"; // no curly braces for default export

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"; // optional for layout

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <Todo />
        <Weather />
        <Notes />
      </div>
      <Footer />
    </div>
  );
}
