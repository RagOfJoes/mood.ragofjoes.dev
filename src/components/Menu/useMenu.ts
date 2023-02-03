import { createMemo, createUniqueId } from 'solid-js';

import * as menu from '@zag-js/menu';
import { normalizeProps, useMachine } from '@zag-js/solid';

import { UseMenu } from './types';

const useMenu = (): UseMenu => {
  const [state, send] = useMachine(
    menu.machine({
      id: createUniqueId(),
    })
  );

  const api = createMemo(() => menu.connect(state, send, normalizeProps));

  return {
    api,
  };
};

export default useMenu;
