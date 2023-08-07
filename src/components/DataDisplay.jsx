import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/mydata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="data-display">
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.subject}</h2>
          <h3>References:</h3>
          <p>{item.references.book}, {item.references.volume}, {item.references.page}, {item.references.line}</p>
          <h3>Description:</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DataDisplay;

