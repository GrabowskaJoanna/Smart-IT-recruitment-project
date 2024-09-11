import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './UserRow';
import { RootState } from '../../../store/store';
import Loading from '../../../shared/Loading';
import { TUser } from '../../../types';

interface TTableBodyProps {
  isLoading: boolean;
}

const TableBody: React.FC<TTableBodyProps> = ({ isLoading }) => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={4}>
            <Loading />
          </td>
        </tr>
      ) : (
        users.map((user: TUser) => <TableRow key={user.id} user={user} />)
      )}
    </tbody>
  );
};

export default TableBody;
