import React from 'react';
import UserCard from '../UserCard';
import './UserGrid.css';

const UserGrid = ({users}) => {
    return (
        <div className="user-grid">
            {users.map((user, index) => (
                <UserCard key={`${user.fullName}-${index}`} user={user} index={index}/>
            ))}
        </div>
    );
};

export default UserGrid;
