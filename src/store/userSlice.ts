import { createSlice } from '@reduxjs/toolkit';

interface TUser {
    name: string;
    username: string;
    email: string;
    phone: string;
};

interface UserState {
    users: TUser[];
}

const initialState: UserState = {
    users: [],
  };


  const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
  });

  export default userSlice.reducer;