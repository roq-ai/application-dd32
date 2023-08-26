import { InvitationInterface } from 'interfaces/invitation';
import { OperationInterface } from 'interfaces/operation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  date_created?: any;
  last_updated?: any;
  status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  operation?: OperationInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    operation?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
