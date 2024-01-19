// KeyValueTable.js
import React from 'react';

const KeyValueTable = ({ keyValuePairs }) => {

  return (
    <table border={"1"}>
      <thead>
        <tr>
          <th className='cell'>Header</th>
          <th className='cell'>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(keyValuePairs).map(([key, value]) => (
          <tr key={key}>
            <td className='cell'>{key}</td>
            <td className='cell'>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default KeyValueTable;
