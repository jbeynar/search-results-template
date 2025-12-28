import React from "react";
import "./SkeletonCard.css";

const SkeletonCard = ({index}) => {
    return (
        <article className="skeleton-card" style={{"--index": index}}>
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
};

export default SkeletonCard;
