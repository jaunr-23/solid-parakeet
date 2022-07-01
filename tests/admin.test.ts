import { randomUUID } from 'crypto';
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

describe('Admin integration test ', () => {
  describe('Admin REST API', () => {
    it('POST /admin/best-profession for a valid date range', async () => {

      const response = await axios.get(`${serverUrl}/admin/best-profession?start=2022-01-01&end=2022-08-01`);
      expect(response.status).toBe(200);
      expect(response.data[0].firstName).toBe('Alan');
      expect(response.data[0].lastName).toBe('Turing');
      expect(response.data[0].profession).toBe('Programmer');
    });

    it('POST /admin/best-profession for a invalid date range', async () => {
      try {
        await axios.get(`${serverUrl}/admin/best-profession?start=2022-11-01&end=2022-08-01`);
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });

    it('POST /admin/best-profession for not valid dates', async () => {
      try {
        await axios.get(`${serverUrl}/admin/best-profession?start=asdsa123&end=2023-132-d1`);
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });
  });
});