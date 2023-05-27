const [sign_in, sign_up] = require('./pages/api/Handleapi.js');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ acceso: 'access_token' }),
    status: 200
  })
);

test('El usuario puede iniciar sesión correctamente', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const result = await sign_in(email, password);
  
    expect(result).toBe('access_token');
  });

test('El usuario se puede registrar correctamente', async () => {
  const nickname = 'testuser';
  const email = 'test@example.com';
  const password = 'password';
  const result = await sign_up(nickname, email, password);

  expect(result).toEqual({ ok: true });
});
