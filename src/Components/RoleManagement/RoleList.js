import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('http://localhost:3001/roles');
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };

        fetchRoles();
    }, []);

    return (
        <div>
            <h2>Role List</h2>
            <ul>
                {roles.map((role) => (
                    <li key={role.id}>
                        {role.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
