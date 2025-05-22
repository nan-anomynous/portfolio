import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./pages/Home/Homepage";
import Footer from "./components/Footer/Footer";
import ProjectPage from "./pages/Projectpage/ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
