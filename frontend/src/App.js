import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyNotes } from "./screens/MyNotes/MyNotes";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
