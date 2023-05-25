import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Bookings } from "./pages/bookings/Bookings";
import { Rooms } from "./pages/rooms/Rooms";
import { Contact } from "./pages/contact/Contact";
import { Users } from "./pages/users/Users";
import { Login } from "./pages/login/Login";
import { TopBar } from "./components/topbar/TopBar";

function App() {
  return (
    <div>
      <TopBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users" element={<Users />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
