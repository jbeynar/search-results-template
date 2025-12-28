import React from "react";
import UserCard from "../UserCard";
import SkeletonCard from "../SkeletonCard";
import "./UserGrid.css";

const UserGrid = ({users, loading, skeletonCount = 12}) => {
    if (loading) {
        return (
            <div className="user-grid">
                {Array.from({length: skeletonCount}).map((_, index) => (
                    <SkeletonCard key={`skeleton-${index}`} index={index}/>
                ))}
            </div>
        );
    }

    return (
        <div className="user-grid">
            {users.map((user, index) => (
                <UserCard key={`${user.fullName}-${index}`} user={user} index={index}/>
            ))}
        </div>
    );
};

export default UserGrid;
