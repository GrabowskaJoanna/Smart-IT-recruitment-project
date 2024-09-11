import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setUsers } from '../store/userSlice';

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
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
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setUsers(data));
    } catch (error) {
      setError('There was a problem with download');
      console.error('There was the problem with download', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showUser();
  }, [dispatch]);

  return <h1>{isLoading ? 'Loading...' : error ? error : 'Users'}</h1>;
};

export default Users;
