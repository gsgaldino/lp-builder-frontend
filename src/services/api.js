import { create } from 'axios';

const api = create({
  baseURL: 'http://localhost:3333/api/v1',
});

export default api;
