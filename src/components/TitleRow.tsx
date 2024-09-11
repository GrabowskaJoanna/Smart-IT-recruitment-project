import React from 'react';

const TitleRow: React.FC = () => {
  return (
    <tr>
      <th>
        <label>
          Name
          <input />
        </label>
      </th>
      <th>
        <label>
          Username
          <input />
        </label>
      </th>
      <th>
        <label>
          Phone
          <input />
        </label>
      </th>
      <th>
        <label>
          Email
          <input />
        </label>
      </th>
    </tr>
  );
};

export default TitleRow;
