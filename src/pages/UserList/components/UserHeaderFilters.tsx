import React from 'react';
import { RootState, AppDispatch } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../../store/userSlice';

const UserHeaderFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ ...filters, [name]: value }));
  };

  return (
    <tr>
      <th>
        <label>
          Name
          <input name="name" value={filters.name} onChange={handleFilter} />
        </label>
      </th>
      <th>
        <label>
          Username
          <input
            name="username"
            value={filters.username}
            onChange={handleFilter}
          />
        </label>
      </th>
      <th>
        <label>
          Phone
          <input name="phone" value={filters.phone} onChange={handleFilter} />
        </label>
      </th>
      <th>
        <label>
          Email
          <input name="email" value={filters.email} onChange={handleFilter} />
        </label>
      </th>
    </tr>
  );
};

export default UserHeaderFilters;
