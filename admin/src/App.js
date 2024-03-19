import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { List } from './pages/list/List';
import { Single } from './pages/single/Single';
import { Newpage } from './pages/newpage/Newpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { productsInputs, userInputs } from "./formsource";
import './style/dark.scss';
import { useContext, useState } from "react";
import {DarkModeContext} from './context/darkModeContext';
function App() {
 const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode?"App dark":"App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<Newpage  inputs={userInputs} title="Add new User" />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route path="new" element={<Newpage inputs={productsInputs} title="Add new Product" />}></Route>
            </Route>
          </Route>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
