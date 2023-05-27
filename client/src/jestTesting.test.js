var api = require('/api/Handleapi.js')

test('El usuario se puede registrar correctamente', async () => {
    const req = {
      body: {
        email: 'test@example.com',
        password: 'password',
        nickname: 'testuser'
      }
    };
    const res = {
      json: jest.fn()
    };
  
    await register(req, res);
  
    expect(res.json).toHaveBeenCalledWith({ ok: true });
  });