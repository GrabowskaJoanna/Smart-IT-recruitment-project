import React from 'react';
import { RootState, AppDispatch } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../../../store/userSlice';
import { TUserFilter } from '../../../types';

const listFilters = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Username', name: 'username', type: 'text' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Email', name: 'email', type: 'text' },
];

const TableHead: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters: TUserFilter = useSelector(
    (state: RootState) => state.users.filters
  );

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) {
      return;
    }

    dispatch(setFilters({ ...filters, [name]: value }));
  };

  return (
    <thead>
      <tr className="filters_header">
        {listFilters.map((filter) => (
          <th>
            <label>
              {filter.label}
              <input
                name={filter.name}
                // @ts-ignore - otherwise a function veryfying if the given key is present in the filters object. I decided for this project it's not necessary.
                value={filters[filter.name]}
                onChange={handleFilter}
                type={filter.type}
              />
            </label>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
