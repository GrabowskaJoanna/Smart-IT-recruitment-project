export interface TUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: TUser[];
}
