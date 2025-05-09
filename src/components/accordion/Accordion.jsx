import React, { useState } from 'react';
// import './styles.css';

const Accordion = ({ title, content, key }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="accordion-card" key={key}>
            <div className='header' onClick={() => setIsActive(!isActive)}>
                <h2>{title}</h2>
                <p>{isActive ? '-' : '+'}</p>
            </div>
            <div className='content'>
                {isActive && <p className='card-info'>{content}</p>}
            </div>
        </section>
    );
};

export default Accordion;
