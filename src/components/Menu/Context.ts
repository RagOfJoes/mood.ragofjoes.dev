import { UseMenu } from './types';
import { createContext } from '@/lib/createContext';

export const [MenuProvider, useMenuCtx] = createContext<UseMenu>({
  hookName: 'useMenu',
  name: 'Menu',
  providerName: 'MenuProvider',
});
