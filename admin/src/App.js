import AllUsers from './component/AllUsers';
import AddUser from './component/AddUser';
import NavBar from './component/NavBar'; 
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserDetail from './component/UserDetails';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/driver" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;