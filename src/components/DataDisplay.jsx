import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/mydata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // const filteredData = data.filter(item =>
  //   item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredData = data.filter(item => {
    const subjectMatch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const referenceBookMatch = item.references.book.toLowerCase().includes(searchTerm.toLowerCase());
    const referenceVolumeMatch = item.references.volume.toLowerCase().includes(searchTerm.toLowerCase());
    const referencePageMatch = item.references.page.toLowerCase().includes(searchTerm.toLowerCase());
    const referenceLineMatch = item.references.line.toLowerCase().includes(searchTerm.toLowerCase());
    const descriptionMatch = item.description.toLowerCase().includes(searchTerm.toLowerCase());
  
    return subjectMatch || referenceBookMatch || referenceVolumeMatch || referencePageMatch || referenceLineMatch || descriptionMatch;
  });
  

  
  return (
    <div className="data-display">
      <div className="search-container">
        <input 
        type="text" 
        placeholder="Search Word"
        onChange={event => setSearchTerm(event.target.value)}
        />
      </div>
    {filteredData.slice().reverse().map(item => (
      <div key={item.id}>
        <h2>{item.id}: {item.subject}</h2>
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