import Introduction from "./page/Introduction";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/dashboardLayout";

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Introduction />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;