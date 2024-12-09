import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [id]);

    const handleEditUser = async () => {
        try {
            await axios.put(`http://localhost:3001/users/${id}`, user);
            alert('User updated successfully!');
        } catch (error) {
            alert('Error updating user!');
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button onClick={handleEditUser}>Update User</button>
        </div>
    );
};

export default UserEdit;
