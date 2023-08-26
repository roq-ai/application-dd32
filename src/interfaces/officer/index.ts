import { InvitationInterface } from 'interfaces/invitation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OfficerInterface {
  id?: string;
  name: string;
  rank: string;
  date_created?: any;
  last_updated?: any;
  user_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  invitation?: InvitationInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
  };
}

export interface OfficerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  rank?: string;
  user_id?: string;
  status?: string;
}
