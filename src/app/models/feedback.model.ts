import { Comment } from './comment.model';
import { User } from './user.model';
export interface FeedBack {
  _id: string;
  account_id: User;
  created_at?: any;
  deletable?: string;
  content?: string;
  comments?: Comment[]
}

// ajouter feedback account id from local storage
// getFeedbackcommentsById

