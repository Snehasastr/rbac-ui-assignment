import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserManagement/UserList';
import UserAdd from './components/UserManagement/UserAdd';
import UserEdit from './components/UserManagement/UserEdit';
import RoleList from './components/RoleManagement/RoleList';
import RoleAdd from './components/RoleManagement/RoleAdd';
import RoleEdit from './components/RoleManagement/RoleEdit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>RBAC UI</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/add" element={<UserAdd />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/role/add" element={<RoleAdd />} />
          <Route path="/role/edit/:id" element={<RoleEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
