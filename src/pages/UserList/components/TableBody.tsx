import React from 'react';
import TableRow from './TableRow';
import { TUser } from '../../../types';
import Loading from '../../../shared/Loading';

interface TTableBodyProps {
  isLoading: boolean;
  users: TUser[];
}

const TableBody: React.FC<TTableBodyProps> = ({ isLoading, users }) => {
  const getElementToRender = () => {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={4}>
            <Loading />
          </td>
        </tr>
      );
    }

    if (users.length === 0) {
      return (
        <tr>
          <td className="not_found" colSpan={4}>
            No users found.
          </td>
        </tr>
      );
    }

    return users.map((user: TUser) => <TableRow key={user.id} user={user} />);
  };

  return <tbody>{getElementToRender()}</tbody>;
};

export default TableBody;
