import axios from 'axios';
import queryString from 'query-string';
import { OfficerInterface, OfficerGetQueryInterface } from 'interfaces/officer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOfficers = async (query?: OfficerGetQueryInterface): Promise<PaginatedInterface<OfficerInterface>> => {
  const response = await axios.get('/api/officers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOfficer = async (officer: OfficerInterface) => {
  const response = await axios.post('/api/officers', officer);
  return response.data;
};

export const updateOfficerById = async (id: string, officer: OfficerInterface) => {
  const response = await axios.put(`/api/officers/${id}`, officer);
  return response.data;
};

export const getOfficerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/officers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOfficerById = async (id: string) => {
  const response = await axios.delete(`/api/officers/${id}`);
  return response.data;
};
