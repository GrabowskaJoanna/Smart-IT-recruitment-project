import React from 'react';
import { TUser } from '../../../types';

interface TTableRowProps {
  user: TUser;
}

const TableRow: React.FC<TTableRowProps> = ({ user }) => {
  return (
    <>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
      </tr>
    </>
  );
};

export default TableRow;
