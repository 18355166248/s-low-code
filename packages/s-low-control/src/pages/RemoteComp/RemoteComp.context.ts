import { createContext, useContext } from 'react';

const initState: any = {};

export const RemoteCompContext = createContext(initState);

export const useRemoteCompContext = () =>
  useContext(RemoteCompContext);
