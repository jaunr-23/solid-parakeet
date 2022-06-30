import { randomUUID } from 'crypto';
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

xdescribe('Balances integration test ', () => {
  describe('Balances REST API', () => {
    it('GETs /contracts/:id a valid contract', async () => {
      const response = await axios.get(`${serverUrl}/contracts/1`, {});
      expect(response.status).toBe(204);
    });
  });
});