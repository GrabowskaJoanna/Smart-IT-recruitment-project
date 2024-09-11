import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, UserState } from '../types';

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<TUser[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
