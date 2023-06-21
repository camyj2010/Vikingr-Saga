import React, { useState, useEffect, useContext } from 'react';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useToggleContext() {
  return useContext(userToggleContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  //xd
  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', newUser);
  };

  return (
    <userContext.Provider value={{ user, updateUser }}>
      <userToggleContext.Provider value={null}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}