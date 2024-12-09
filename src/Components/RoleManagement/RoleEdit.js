import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RoleEdit = () => {
    const { id } = useParams();
    const [roleName, setRoleName] = useState('');

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/roles/${id}`);
                setRoleName(response.data.name);
            } catch (error) {
                console.error('Error fetching role:', error);
            }
        };

        fetchRole();
    }, [id]);

    const handleEditRole = async () => {
        try {
            await axios.put(`http://localhost:3001/roles/${id}`, { name: roleName });
            alert('Role updated successfully!');
        } catch (error) {
            alert('Error updating role!');
        }
    };

    return (
        <div>
            <h2>Edit Role</h2>
            <input
                type="text"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
            />
            <button onClick={handleEditRole}>Update Role</button>
        </div>
    );
};

export default RoleEdit;
