import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Bookings } from "./pages/bookings/Bookings";
import { Rooms } from "./pages/rooms/Rooms";
import { Contact } from "./pages/contact/Contact";
import { Users } from "./pages/users/Users";
import { Login } from "./pages/login/Login";
import TopBar from "./components/topbar/TopBar";
import { SideBar } from "./components/sidebar/SideBar";
import Layout from "./components/Layout";
import { SingleBooking } from "./pages/bookings/SingleBooking";
import { SingleUser } from "./pages/users/SingleUser";
import { SingleRoom } from "./pages/rooms/SingleRoom";
import { ProtectRoute } from "./components/ProtectedRoute";
import { NewBooking } from "./pages/bookings/NewBooking";
import NewUser from "./pages/users/NewUser";
import NewRoom from "./pages/rooms/NewRoom";
import { EditUser } from "./pages/users/EditUser";

function App() {
  const authReady = window.localStorage.getItem("auth");

  return (
    <div>
      {authReady ? <TopBar /> : <></>}
      <Layout>
        {authReady ? <SideBar /> : <></>}
        <div className="window-container">
          <Routes>
            <Route
              path="/login"
              element={authReady ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="/"
              element={
                authReady ? <Dashboard /> : <Navigate replace to="/login" />
              }
            />
            <Route path="*" element={<ProtectRoute authReady={authReady} />}>
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<SingleBooking />} />
              <Route path="newBooking" element={<NewBooking />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/:roomId" element={<SingleRoom />} />
              <Route path="newRoom" element={<NewRoom />} />
              <Route path="contact" element={<Contact />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:userId" element={<SingleUser />} />
              <Route path="editUser/:id" element={<EditUser />} />
              <Route path="newUser" element={<NewUser />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
