import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setUsers } from '../../store/userSlice';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';
import Loading from '../../shared/Loading';

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();

  const showUser = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'GET',
        }
      );
      if (!response.ok) {
        throw new Error('An error occurred while sending the request!');
      }
      const data = await response.json();
      dispatch(setUsers(data));
    } catch (error) {
      console.error(
        'An error occurred while fetching users from the server!',
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showUser();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div className="table-container">
        <table>
          <TableHead setIsLoading={setIsLoading} />
          <TableBody isLoading={isLoading} />
        </table>
      </div>
    </>
  );
};

export default Users;
