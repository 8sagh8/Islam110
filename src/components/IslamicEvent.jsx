import React, { useState, useEffect } from 'react';
import '../css/EventPage.css'


const IslamicEvent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/eventdata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


    return (
        <div className="data-container">
            {data.map(item => (
                <div key={item.name} className="data-box">
                    <h2>{item.name}</h2>
                    <p><strong>Birth:</strong> {item.birth} - {item.birthDescription}</p>
                    <p><strong>Death:</strong> {item.death} - {item.deathDescription}</p>
                </div>
            ))}
        </div>
    );



  }

export default IslamicEvent;