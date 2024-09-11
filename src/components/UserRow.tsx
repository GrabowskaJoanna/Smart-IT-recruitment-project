import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TableRow: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
