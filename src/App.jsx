import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profil from "./components/Profil";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/editpost" element={<EditPost />} />
    </Routes>
  );
}

export default App;
