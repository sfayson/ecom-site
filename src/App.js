import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/Navigation/navigation.component";
import Home from "./Routes/Home/home.component";
import Authentication from "./Routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />}/> 
      <Route path='shop' element={<Home />}/>
      <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
};

export default App;
