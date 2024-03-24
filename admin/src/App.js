import { useContext } from "react";
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { List } from './pages/list/List';
import { Single } from './pages/single/Single';
import { Newpage } from './pages/newpage/Newpage';
import { hotelInputs, userInputs } from "./formsource";
import './style/dark.scss';
import { hotelColumns, userColumns } from "./datatablesource";
import {Newhotel} from './pages/newHotel/Newhotel'
function App() {
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

  // If user exists but is not an admin, redirect to login
  // if (user && !user.isAdmin) {
  //   return <Navigate to="/login" />;
  // }

  // If user doesn't exist, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected route
  return children;
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns}/></ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><Newpage inputs={userInputs} title="Add new User" /></ProtectedRoute>} />
            </Route>
            <Route path="hotels">
              <Route index element={<ProtectedRoute><List columns={hotelColumns}/></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><Newhotel inputs={hotelInputs} title="Add new Hotel" /></ProtectedRoute>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
