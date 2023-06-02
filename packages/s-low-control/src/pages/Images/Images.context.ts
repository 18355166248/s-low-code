import { createContext, useContext } from 'react';

const initState: any = {};

export const ImagesContext = createContext(initState);

export const useImagesContext = () =>
  useContext(ImagesContext);
