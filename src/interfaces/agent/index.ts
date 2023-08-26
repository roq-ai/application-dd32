import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AgentInterface {
  id?: string;
  name: string;
  rank: string;
  date_created?: any;
  last_updated?: any;
  user_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AgentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  rank?: string;
  user_id?: string;
  status?: string;
}
