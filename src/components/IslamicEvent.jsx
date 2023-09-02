import React, { useState, useEffect } from 'react';
import '../css/EventPage.css';

const IslamicEvent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/eventdata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const groupByYear = (arr) => {
    return arr.reduce((acc, curr) => {
      const { name, birth, birthDescription, death, deathDescription } = curr;

      // Birth year group
      if (!acc[birth]) {
        acc[birth] = [];
      }
      acc[birth].push({ name, description: birthDescription, type: 'Birth' });

      // Death year group
      if (!acc[death]) {
        acc[death] = [];
      }
      acc[death].push({ name, description: deathDescription, type: 'Death' });

      return acc;
    }, {});
  };

  const groupedData = groupByYear(data);

  return (
    <div className="data-container">
      {Object.entries(groupedData).map(([year, events]) => (
        <div key={year} className="year-group">
          <h2>Year: {year}</h2>
          {events.map((event) => (
            <div key={event.name + event.type} className="data-box">
              <p>
                <strong>{event.type}:</strong> {event.name} - {event.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IslamicEvent;
