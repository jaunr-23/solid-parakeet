import axios from 'axios';
import { IJob } from '../src/types';

const serverUrl = 'http://localhost:3001';

describe('Jobs integration test ', () => {
  describe('Jobs REST API', () => {
    it('GETs /jobs/unpaid for a valid Client ID', async () => {
      const headers = { profile_id: 2 };

      const response = await axios.get<IJob[]>(`${serverUrl}/jobs/unpaid`, { headers });
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(2);
      expect(response.data[0].paid).toBe(null);
      expect(response.data[0].description).toBe('work');
      expect(response.data[0].Contract.id).toBe(3);
      expect(response.data[0].Contract.ClientId).toBe(2);
    });

    it('GETs /jobs/unpaid for a valid Contractor ID', async () => {
      const headers = { profile_id: 7 };

      const response = await axios.get<IJob[]>(`${serverUrl}/jobs/unpaid`, { headers });
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(2);
      expect(response.data[0].paid).toBe(null);
      expect(response.data[0].description).toBe('work');
      expect(response.data[0].Contract.id).toBe(4);
      expect(response.data[0].Contract.ContractorId).toBe(7);
    });

    it('GETs /jobs/unpaid for a valid Client ID without jobs', async () => {
      const headers = { profile_id: 3 };

      const response = await axios.get<IJob[]>(`${serverUrl}/jobs/unpaid`, { headers });
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(0);
    });

    it('POST /jobs/:job_id/pay for a valid Job ID', async () => {
      const headers = { profile_id: 7 };

      const response = await axios.post<number[]>(`${serverUrl}/jobs/4/pay`, {}, { headers });
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(1);

    });
  });
});