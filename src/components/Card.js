import React from "react";

export const Card = ({ title, description }) => {
    return (
        <div className="cards">
            <div className="card text-bg-dark mb-3" style={{ maxWidth: '21rem', marginLeft: '8px' }}>
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
            </div>
            
        </div>

    )
}
