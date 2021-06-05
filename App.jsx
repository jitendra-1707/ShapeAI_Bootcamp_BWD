import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note className="note" />
      <Note className="note" />
      <Note className="note" />
    </div>
  );
}

export default App;
