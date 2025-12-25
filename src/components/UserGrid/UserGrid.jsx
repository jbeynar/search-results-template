import React, {useState, useEffect} from 'react';
import UserCard from '../UserCard';
import './UserGrid.css';

const UserGrid = ({users: initialUsers, skeletonCount = 12, loadDelay = 100}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUsers(initialUsers);
            setLoading(false);
        }, loadDelay);

        return () => clearTimeout(timer);
    }, [initialUsers, loadDelay]);

    useEffect(() => {
        const renderDelay = 800 * Math.random() + 300;
        if (!loading && visibleCount < users.length) {
            const timer = setTimeout(() => {
                setVisibleCount(prev => prev + 1);
            }, renderDelay);
            return () => clearTimeout(timer);
        }
    }, [loading, visibleCount, users.length]);

    const remainingSkeletons = loading ? skeletonCount : Math.max(0, skeletonCount - visibleCount);

    return (
        <div className="user-grid">
            {users.slice(0, visibleCount).map((user, index) => (
                <UserCard key={`${user.fullName}-${index}`} user={user} index={index}/>
            ))}
            {Array.from({length: remainingSkeletons}).map((_, index) => (
                <UserCard key={`skeleton-${index}`} skeleton index={visibleCount + index}/>
            ))}
        </div>
    );
};

export default UserGrid;
