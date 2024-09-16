import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, UserState, TUserFilter } from '../types';

const initialState: UserState = {
  users: [],
  filters: {
    name: '',
    username: '',
    phone: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<TUser[]>) {
      state.users = action.payload;
    },
    setFilters(state, action: PayloadAction<TUserFilter>) {
      state.filters = action.payload;
    },
  },
});

export const { setUsers, setFilters } = userSlice.actions;
export default userSlice.reducer;
