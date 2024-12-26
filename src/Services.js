//src/Services.js

import React from 'react';
import './Services.css';

const services = [
    { title: 'Design & Developement', description: 'Crafting visually appealing & user friendly websites optimized for performance and conversation.' },
    { title: 'Content Marketing', description: 'Crafting visually appealing & user friendly websites optimizes]d for performance and conversation.' },
    { title: 'Commercial Video', description: 'Crafting visually appealing & user friendly websites optimized fro performance and conversation.' },
    { title: 'Email Marketing', description: 'Crafting visually appealing & user friendly websites optimizes for performance and conversation.' }
];



const Services = () => {

    return (
        <section className="service-section">
            <div class="moving-text-container">
                <div class="moving-text">
                    <p>BURNING WITH PASSION BURNING WITH PASSION BURNING WITH PASSION BURNING WITH PASSION </p>                    
                </div>                
            </div>

            <div className="service-header">
                <h5>OUR SERVICES</h5>
            </div>

            <div className="header">
                <h2>Innovating Tommorrow's Digital World,Today</h2>
                <button className="all-services-button">All Services &rarr;</button>
            </div>

            <div className="service-list">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="arrow-icon">&rarr;</span>
                    </div>
                ))}
            </div>
            <p className="service-footer">
                &#x1F680; You can also find <span style={{ color: "#af804d" }}>Our Services</span> to contact for the consulting.
            </p>

        </section>
    );
};

export default Services;