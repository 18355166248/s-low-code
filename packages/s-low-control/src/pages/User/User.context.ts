import { createContext, useContext } from 'react';

const initState: any = {};

export const UserContext = createContext(initState);

export const useUserContext = () =>
  useContext(UserContext);
