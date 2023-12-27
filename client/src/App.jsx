import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="bg-stone-700">
      <Navbar></Navbar>
      <Sidebar />
    </div>
  );
}

export default App;
