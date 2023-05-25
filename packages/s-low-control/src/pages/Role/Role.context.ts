import { createContext, useContext } from 'react';

const initState: any = {};

export const RoleContext = createContext(initState);

export const useRoleContext = () =>
  useContext(RoleContext);
