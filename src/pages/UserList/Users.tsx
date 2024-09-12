import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setUsers } from '../../store/userSlice';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const users = useSelector((state: RootState) => state.users.users);
  const filters = useSelector((state: RootState) => state.users.filters);
  const dispatch = useDispatch<AppDispatch>();

  const normalizePhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      normalizePhoneNumber(user.phone).includes(
        normalizePhoneNumber(filters.phone)
      ) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase())
  );

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
          <TableHead />
          <TableBody isLoading={isLoading} users={filteredUsers} />
        </table>
      </div>
    </>
  );
};

export default Users;
