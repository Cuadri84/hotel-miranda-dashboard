import { Navigate, Route, Routes } from "react-router-dom";

// React Context
import { useAuthContext } from "./hooks/useAuthContext";

import Layout from "./components/Layout";
import { ProtectRoute } from "./components/ProtectedRoute";
import { SideBar } from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import { Bookings } from "./pages/bookings/Bookings";
import { EditBooking } from "./pages/bookings/EditBooking";
import { NewBooking } from "./pages/bookings/NewBooking";
import { SingleBooking } from "./pages/bookings/SingleBooking";
import { Contact } from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { EditRoom } from "./pages/rooms/EditRoom";
import NewRoom from "./pages/rooms/NewRoom";
import { Rooms } from "./pages/rooms/Rooms";
import { SingleRoom } from "./pages/rooms/SingleRoom";
import { EditUser } from "./pages/users/EditUser";
import { NewUser } from "./pages/users/NewUser";
import { SingleUser } from "./pages/users/SingleUser";
import { Users } from "./pages/users/Users";

function App() {
  const { authReady } = useAuthContext();

  return (
    <div>
      {authReady ? <TopBar /> : <></>}
      <Layout>
        {authReady ? <SideBar /> : <></>}
        <div className="window-container">
          <Routes>
            <Route
              path="/login"
              element={authReady ? <Navigate to="/" /> : <Login />}
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
              <Route path="editBooking/:bookingId" element={<EditBooking />} />
              <Route path="newBooking" element={<NewBooking />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/:roomId" element={<SingleRoom />} />
              <Route path="editRoom/:roomId" element={<EditRoom />} />
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
