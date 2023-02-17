import { splitProps } from 'solid-js';

import clsx from 'clsx';

import { CalendarProvider } from './Context';
import { CalendarProps } from './types';
import useCalendar from './useCalendar';

export function Calendar(props: CalendarProps) {
  const [split, other] = splitProps(props, [
    'class',
    'date',
    'defaultDate',
    'defaultSelected',
    'onDateChange',
    'onSelectedChange',
    'selected',
  ]);

  const ctx = useCalendar(props);

  return (
    <CalendarProvider value={ctx}>
      <div
        {...other}
        class={clsx(
          'Calendar',

          'rounded-3xl bg-surface bg-gradient-to-br from-surface via-base to-base bg-[length:200%_200%] bg-left-top shadow',

          'dark:from-overlay dark:to-base dark:shadow-none',

          split.class
        )}
      />
    </CalendarProvider>
  );
}
