import { randomUUID } from 'crypto';
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

describe('Jobs integration test ', () => {
  describe('Jobs REST API', () => {
    it('GETs /jobs/unpaid', async () => {
      const response = await axios.get(`${serverUrl}/jobs/unpaid`);
      expect(response.status).toBe(204);
    });
  });
});