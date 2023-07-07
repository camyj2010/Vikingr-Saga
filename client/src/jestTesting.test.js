import { sign_in, sign_up,getUserInfo } from './pages/api/Handleapi.js'



test('El usuario puede iniciar sesión correctamente', async () => {
    global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
          acceso: 'access_token',
          message: 'Entro',
          userid: '649f1d54d008c3de10fe8bf3',
          userNickname: 'admin', }),
    status: 200
  })
);
    const email = 'atlasAdmin@gmail.com';
    const password = '123';
    const result = await sign_in(email, password);
 
    expect(result).toEqual({
      acceso : 'access_token',
      message: "Entro",
      userid: "649f1d54d008c3de10fe8bf3",
      userNickname: "admin"
  })
  });

test('Se puede obtener la informacion del usuario', async () => {
    global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      _id: "649f1d54d008c3de10fe8bf3",
      email: "atlasadmin@gmail.com",
      nickname: "admin",
      progress: 0,
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      avatar: 123,
      image: 13,
      __v: 0 }),
    status: 200
  })
);
    const user = '649f1d54d008c3de10fe8bf3';
    const result = await getUserInfo(user);
 
    expect(result).toEqual({
      _id: "649f1d54d008c3de10fe8bf3",
      email: "atlasadmin@gmail.com",
      nickname: "admin",
      progress: 0,
      lesson1: false,
      lesson2: false,
      lesson3: false,
      lesson4: false,
      avatar: 123,
      image: 13,
      __v: 0
  })
  });


 


test('El usuario se puede registrar correctamente', async () => {
    global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ok: true }),
    status: 200
  })    
);
  const nickname = 'testuser';
  const email = 'test@gmail.com';
  const password = '12345';
  const result = await sign_up(nickname, email, password);


  expect(result).toEqual({ ok: true });
});


