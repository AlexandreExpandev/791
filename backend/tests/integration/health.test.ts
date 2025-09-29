import request from 'supertest';
import app from '../../src/app'; // Adjust the path to your app entry file

// Mock the database connection to prevent actual DB calls during health check tests
jest.mock('../../src/database/sqlServer', () => ({
  connectToDatabase: jest.fn().mockResolvedValue(true),
  getDbPool: jest.fn(),
}));

describe('Health Check API', () => {
  it('should return 200 OK and a health status message', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Server is healthy');
    expect(response.body.data).toHaveProperty('uptime');
    expect(response.body.data).toHaveProperty('message', 'OK');
    expect(response.body.data).toHaveProperty('timestamp');
  });
});
