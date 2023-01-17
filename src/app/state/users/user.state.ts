import { User } from 'src/app/user/user';

export interface UserState {
  checkUser: {};
  currUser: User | null;
  users: User[];
  error: string;
  isAuthenticated: boolean;
  status: 'pending' | 'loading' | 'error' | 'success';
}
