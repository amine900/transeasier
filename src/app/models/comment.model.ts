import { User } from './user.model';
export interface Comment {
  account_id: User;
  created_at?: any;
  content?: string;
}
