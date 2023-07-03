import { createContext, useContext } from 'react';

const initState: any = {};

export const MenuContext = createContext(initState);

export const useMenuContext = () =>
  useContext(MenuContext);
