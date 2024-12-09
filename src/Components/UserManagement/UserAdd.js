import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAdd = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = async () => {
        const userData = { name, email };
        try {
            await axios.post('http://localhost:3001/users', userData);
            toast.success('User added successfully!');
        } catch (error) {
            toast.error('Error adding user!');
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default UserAdd;
