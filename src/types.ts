export interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface TUserFilter {
  name: string;
  username: string;
  phone: string;
  email: string;
}

export interface UserState {
  users: TUser[];
  filters: TUserFilter;
}
