import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Sidebar from "../src/components/sidebar/sidebar.jsx";
function App() {
  const [page, setPage] = useState("one");

  return (
    <div className="Main-Dashboard">
      <Header />
      {/* <Sidebar /> */}
      {page === "one" && <Sidebar goNext={() => setPage("two")} />}
    </div>
  );
}

export default App;
