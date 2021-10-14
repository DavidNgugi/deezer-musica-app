import app from '../app';

describe("server tests", () => {
    const mockListen = jest.fn((port = 8001, hostname = '0.0.0.0') => { jest.fn() });
    app.listen = mockListen;

    afterEach(() => {
        mockListen.mockReset();
    });

    it('Server works on port 8001', async () => {
        require('../index');
        expect(mockListen.mock.calls.length).toBe(1);
        expect(mockListen.mock.calls[0][0]).toBe("8001");
    });
});