import React from 'react';
import MatrixText from './MatrixText';
import './UserCard.css';

const UserCard = ({user, index, skeleton}) => {
    if (skeleton) {
        return (
            <article className="user-card user-card--skeleton" style={{'--index': index}}>
                <header className="card-header">
                    <div className="avatar skeleton-shimmer"/>
                    <div className="user-info">
                        <div className="skeleton-shimmer skeleton-text skeleton-title"/>
                        <div className="skeleton-shimmer skeleton-text"/>
                        <div className="skeleton-shimmer skeleton-text skeleton-short"/>
                    </div>
                </header>
                <section className="jira-tickets">
                    <div className="skeleton-shimmer skeleton-text skeleton-heading"/>
                    <div className="skeleton-shimmer skeleton-text"/>
                    <div className="skeleton-shimmer skeleton-text"/>
                    <div className="skeleton-shimmer skeleton-text skeleton-short"/>
                </section>
            </article>
        );
    }

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
                    {user.jiraTickets.map((ticket, i) => (
                        <li key={ticket.id}>
                            {ticket.id} - {ticket.title}
                            {/*<span class="jira-id"><MatrixText text={ticket.id} delay={i * 350}/></span>*/}
                            {/*<MatrixText text={ticket.title} delay={i * 350 + 450}/>*/}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default UserCard;
