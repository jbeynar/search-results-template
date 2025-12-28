import React from 'react';
import './UserCard.css';

const UserCard = ({user, index}) => {
    return (
        <article className="user-card" style={{'--index': index}}>
            <header className="card-header">
                <img src={user.avatar} alt={user.fullName} className="avatar"/>
                <div className="user-info">
                    <h2>{user.fullName}</h2>
                    <p>{user.jobTitle}</p>
                    <p>Team: {user.team}</p>
                    <p>{user.location}</p>
                </div>
            </header>
            <section className="jira-tickets">
                <h3>References</h3>
                <ul>
                    {user.jiraTickets.map((ticket) => (
                        <li key={ticket.id}>
                            {ticket.id} - {ticket.title}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default UserCard;
