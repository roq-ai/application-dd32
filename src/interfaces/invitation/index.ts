import { OrganizationInterface } from 'interfaces/organization';
import { OfficerInterface } from 'interfaces/officer';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  date_created?: any;
  last_updated?: any;
  organization_id: string;
  officer_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  officer?: OfficerInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  officer_id?: string;
  status?: string;
}
