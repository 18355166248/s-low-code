import { createContext, useContext } from 'react';

const initState: any = {};

export const ProjectContext = createContext(initState);

export const useProjectContext = () =>
  useContext(ProjectContext);
