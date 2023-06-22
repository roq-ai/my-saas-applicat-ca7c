import axios from 'axios';
import queryString from 'query-string';
import { BlockchainInterface, BlockchainGetQueryInterface } from 'interfaces/blockchain';
import { GetQueryInterface } from '../../interfaces';

export const getBlockchains = async (query?: BlockchainGetQueryInterface) => {
  const response = await axios.get(`/api/blockchains${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBlockchain = async (blockchain: BlockchainInterface) => {
  const response = await axios.post('/api/blockchains', blockchain);
  return response.data;
};

export const updateBlockchainById = async (id: string, blockchain: BlockchainInterface) => {
  const response = await axios.put(`/api/blockchains/${id}`, blockchain);
  return response.data;
};

export const getBlockchainById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/blockchains/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBlockchainById = async (id: string) => {
  const response = await axios.delete(`/api/blockchains/${id}`);
  return response.data;
};
