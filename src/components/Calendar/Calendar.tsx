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

          'rounded-3xl border border-muted/20 bg-surface',

          split.class
        )}
      />
    </CalendarProvider>
  );
}
