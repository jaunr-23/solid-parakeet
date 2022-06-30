import { randomUUID } from 'crypto';
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

describe('Contracts integration test ', () => {
  describe('Contracts REST API', () => {
    it('GETs /contracts/:id a valid contract', async () => {
      const response = await axios.get(`${serverUrl}/contracts/1`, {});
      expect(response.status).toBe(204);
    });
  });
});