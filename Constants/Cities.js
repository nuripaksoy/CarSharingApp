import React from 'react';

const Cities = () => {
    const cities = ['New York', 'London', 'Paris', 'Tokyo'];

    return (
        <div>
            <h2>List of Cities</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cities;
