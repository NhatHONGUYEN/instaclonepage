import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profil from "./components/Profil";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import CreateUserProfil from "./components/CreateUserProfil";
import UserProfil from "./components/UserProfil";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/editpost" element={<EditPost />} />
      <Route path="/createUserProfil" element={<CreateUserProfil />} />
      <Route path="/userProfil" element={<UserProfil />} />
    </Routes>
  );
}

export default App;
