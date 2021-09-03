import { User } from './user.model';
export interface Comment {
  _id: string;
  account_id: User;
  created_at?: any;
  deletable?: string;
  content?: string;
}
