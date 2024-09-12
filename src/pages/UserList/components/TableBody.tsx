import React from 'react';
import TableRow from './TableRow';
import { TUser } from '../../../types';
import Loading from '../../../shared/Loading';

interface TTableBodyProps {
  isLoading: boolean;
  users: TUser[];
}

const TableBody: React.FC<TTableBodyProps> = ({ isLoading, users }) => {
  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={4}>
            <Loading />
          </td>
        </tr>
      ) : users.length === 0 ? (
        <tr>
          <td colSpan={4} style={{ textAlign: 'center' }}>
            No users found.
          </td>
        </tr>
      ) : (
        users.map((user: TUser) => <TableRow key={user.id} user={user} />)
      )}
    </tbody>
  );
};

export default TableBody;
