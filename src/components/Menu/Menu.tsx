import { MenuProvider } from './Context';
import { MenuProps } from './types';
import useMenu from './useMenu';

export function Menu(props: MenuProps) {
  const ctx = useMenu();

  return <MenuProvider value={ctx}>{props.children}</MenuProvider>;
}
