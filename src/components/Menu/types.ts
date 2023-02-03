import { Accessor, ComponentProps } from 'solid-js';

import { connect } from '@zag-js/menu';

export type MenuProps = ComponentProps<'div'> & {
  onClose?: () => void;
  onOpen?: () => void;
};

export type MenuTriggerProps = ComponentProps<'button'>;

export type UseMenu = {
  api: Accessor<ReturnType<typeof connect>>;
};
