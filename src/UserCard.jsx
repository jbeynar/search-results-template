import React, {useState, useEffect} from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';

const MatrixText = ({text, delay = 0}) => {
    const [displayText, setDisplayText] = useState('');
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        let frame = 0;
        const totalFrames = 32;
        const interval = 30;
        let timeoutId;
        let intervalId;

        const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

        const animate = () => {
            intervalId = setInterval(() => {
                frame++;
                const revealedCount = Math.floor((frame / totalFrames) * text.length);

                let result = '';
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedCount) {
                        result += text[i];
                    } else {
                        result += randomChar();
                    }
                }
                setDisplayText(result);

                if (frame >= totalFrames) {
                    clearInterval(intervalId);
                    setDisplayText(text);
                    setIsAnimating(false);
                }
            }, interval);
        };

        timeoutId = setTimeout(animate, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, delay]);

    return <span className={isAnimating ? 'matrix-text' : ''}>{displayText}</span>;
};

const UserCard = ({user, index, skeleton}) => {
    if (skeleton) {
        return (
            <article className="user-card" style={{'--index': index}}>
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
                            <MatrixText text={ticket.id} delay={i * 350}/> <MatrixText text={ticket.title}
                                                                                       delay={i * 350 + 250}/>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default UserCard;
