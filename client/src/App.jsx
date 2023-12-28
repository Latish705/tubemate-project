import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Video from "./components/Video/Video";
import UploadVideo from "./components/Video/UploadVideo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />;
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/video" element={<Video />}></Route>
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </>
  );
}

export default App;
