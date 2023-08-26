import axios from 'axios';
import queryString from 'query-string';
import { OperationInterface, OperationGetQueryInterface } from 'interfaces/operation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperations = async (
  query?: OperationGetQueryInterface,
): Promise<PaginatedInterface<OperationInterface>> => {
  const response = await axios.get('/api/operations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOperation = async (operation: OperationInterface) => {
  const response = await axios.post('/api/operations', operation);
  return response.data;
};

export const updateOperationById = async (id: string, operation: OperationInterface) => {
  const response = await axios.put(`/api/operations/${id}`, operation);
  return response.data;
};

export const getOperationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/operations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOperationById = async (id: string) => {
  const response = await axios.delete(`/api/operations/${id}`);
  return response.data;
};
