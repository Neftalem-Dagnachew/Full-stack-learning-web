import Introduction from "./page/Introduction";
import SecondIntro from "./page/secondIntro";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {

  return(
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Introduction />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;