import { mergeProps } from 'solid-js';

import { useMenuCtx } from './Context';
import { MenuTriggerProps } from './types';

export function MenuTrigger(props: MenuTriggerProps) {
  const { api } = useMenuCtx();

  const mergedProps = mergeProps(props, api().triggerProps);

  return <button {...mergedProps} />;
}
