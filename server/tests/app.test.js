import request from 'supertest';
import app from '../app';

describe("app tests", () => {
    it("healcheck should return 200", (done) => {
        request(app.listen()).get('/api/healthcheck').expect(200, done);
    });
});