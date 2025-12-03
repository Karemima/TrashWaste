import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QRScan from "./pages/QRScan";
import Tips from "./pages/Tips";
import Profile from "./pages/Profile";
import ProfileMenu from "./pages/ProfileMenu";
import TipDetail from "./pages/TipDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scan" element={<QRScan />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-menu" element={<ProfileMenu />} />
        <Route path="/tip/:id" element={<TipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

