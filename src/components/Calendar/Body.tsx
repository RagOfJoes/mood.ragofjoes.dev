import { splitProps } from 'solid-js';

import clsx from 'clsx';

import { CalendarBodyProps } from './types';

export function CalendarBody(props: CalendarBodyProps) {
  const [split, other] = splitProps(props, ['class']);

  return (
    <table
      {...other}
      class={clsx(
        'Calendar-body',

        'h-full w-full table-fixed',

        split.class
      )}
    />
  );
}
