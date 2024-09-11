import React from 'react';

interface TUserHeaderFilters {
  setIsLoading: Function;
}

const UserHeaderFilters: React.FC<TUserHeaderFilters> = ({ setIsLoading }) => {
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

export default UserHeaderFilters;
