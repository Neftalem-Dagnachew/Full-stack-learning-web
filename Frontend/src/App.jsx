import Introduction from "./page/Introduction";
import Login from "./page/Login";
import Register from "./page/Register";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Introduction />}/>
        </Route>
        <Route path="Login" element={<Login />}/>
        <Route path="Register" element={<Register />}/>
      </Routes>
    </>
  )
}

export default App;