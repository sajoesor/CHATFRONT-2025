import './App.css';
import Form from './components/Form';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import ChangePassword from './components/ChangePassword';
import CreateUser from './components/CreateUser'; // Importa el nuevo componente
import CreateAdmin from './components/CreateAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form callback={setUser} />} />
        <Route path='/userHome' element={<UserHome user={user} />} />
        <Route path='/adminHome' element={<AdminHome user={user} />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/createAdmin' element={<CreateAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;