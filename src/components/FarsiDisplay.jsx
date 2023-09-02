import React, { useEffect, useState } from 'react';
import '../css/FarsiDisplay.css'; // Import the CSS file for styling

const FarsiDisplay = () => {
  const [farsiData, setFarsiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/myfarsi.json')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => a.mazdar.localeCompare(b.mazdar));
        setFarsiData(sortedData);
      });
  }, []);

  const filteredData = farsiData.filter(item => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const fieldsToSearch = [
      item.past_I,
      item.past_You,
      item.past_It,
      item.past_We,
      item.past_You_2,
      item.past_They,
      item.present_I,
      item.present_You,
      item.present_It,
      item.present_We,
      item.present_You_2,
      item.present_They,
      item.mazdar
    ];

    return fieldsToSearch.some(field => field.toLowerCase().includes(lowerCaseSearchQuery));
  });


  return (
    <div className="farsi-container">
      <div className="farsi-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      
      <table className="farsi-table">
        <thead>
          <tr>
            <th>Past Tense</th>
            <th>Present Tense</th>
            <th>Mazdar</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>
                <td>
                <p>{item.past_I}</p>
                </td><td>
                <p>{item.past_You}</p>
                </td><td>
                <p>{item.past_It}</p>
                </td><td>
                <p>{item.past_We}</p>
                </td><td>
                <p>{item.past_You_2}</p>
                </td><td>
                <p>{item.past_They}</p>
                </td>
              </td>
              <td>
                <td>
                <p>{item.present_I}</p>
                </td><td>
                <p>{item.present_You}</p>
                </td><td>
                <p>{item.present_It}</p>
                </td><td>
                <p>{item.present_We}</p>
                </td><td>
                <p>{item.present_You_2}</p>
                </td><td>
                <p>{item.present_They}</p>
                </td>
              </td>
              <td>{index + 1}) <br /><br />{item.mazdar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarsiDisplay;
