import React, { useState } from 'react';
import axios from 'axios';

const RoleAdd = () => {
    const [roleName, setRoleName] = useState('');

    const handleAddRole = async () => {
        try {
            await axios.post('http://localhost:3001/roles', { name: roleName });
            alert('Role added successfully!');
        } catch (error) {
            alert('Error adding role!');
        }
    };

    return (
        <div>
            <h2>Add Role</h2>
            <input
                type="text"
                placeholder="Role Name"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
            />
            <button onClick={handleAddRole}>Add Role</button>
        </div>
    );
};

export default RoleAdd;
