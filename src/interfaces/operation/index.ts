import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  name: string;
  description?: string;
  date_created?: any;
  last_updated?: any;
  organization_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  status?: string;
}
