import Introduction from "./page/Introduction";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Introduction />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </>
  )
}

export default App;