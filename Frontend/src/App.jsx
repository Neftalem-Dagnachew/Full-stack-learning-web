import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css"

// pages
import Introduction from "./page/Introduction";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/dashboardLayout";
import Profile from "./page/DashboardPages/profile";
import FunctionalEditProfile from "./page/DashboardPages/FunctionalEditProfile";

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Introduction />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/my-dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="members/:nickname" element={<Profile />}/>
          <Route path="members/:nickname/profile/edit" element={<FunctionalEditProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;