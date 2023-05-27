import { sign_in, sign_up } from './pages/api/Handleapi.js'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ acceso: 'access_token' }),
    status: 200
  })
);

test('El usuario puede iniciar sesión correctamente', async () => {
    const email = 'atlasAdmin@gmail.com';
    const password = '123';
    const result = await sign_in(email, password);
  
    expect(result).toBe('access_token');
  });

  global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ok: true }),
    status: 200
  })
);

test('El usuario se puede registrar correctamente', async () => {
  const nickname = 'testuser';
  const email = 'test@gmail.com';
  const password = '12345';
  const result = await sign_up(nickname, email, password);

  expect(result).toEqual({ ok: true });
});
