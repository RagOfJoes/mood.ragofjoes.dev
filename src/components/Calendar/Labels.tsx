import { createMemo, For, splitProps } from 'solid-js';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { useCalendarCtx } from './Context';
import { CalendarLabelsProps } from './types';
import { getNarrowLabels, getStartOfWeek } from './utils';

export function CalendarLabels(props: CalendarLabelsProps) {
  const [split, other] = splitProps(props, ['children', 'class', 'format']);

  const [state] = useCalendarCtx();

  const labels = createMemo(() => {
    if (split.format === 'narrow') {
      return getNarrowLabels(state.calendarProps.startDay);
    }

    let layout = '';
    switch (split.format) {
      case 'long':
        layout = 'dddd';
        break;
      case 'short':
        layout = 'ddd';
        break;
      default:
        layout = 'ddd';
    }

    const arr: string[] = [];
    const startWeek = getStartOfWeek(new Date(), state.calendarProps.startDay);

    for (let i = 0; i < 7; i += 1) {
      const formatted = dayjs(startWeek).format(layout);

      arr.push(formatted);
      startWeek.setDate(startWeek.getDate() + 1);
    }

    return arr;
  });

  return (
    <thead
      {...other}
      class={clsx(
        'Calendar-labels',

        split.class
      )}
    >
      <tr>
        <For each={labels()}>
          {(label) => {
            return (
              <th
                class={clsx(
                  'table-cell border-b border-r border-t p-3 last:border-r-0',

                  'max-md:p-2'
                )}
              >
                <p class="text-sm font-bold uppercase text-subtle">{label}</p>
              </th>
            );
          }}
        </For>
      </tr>
    </thead>
  );
}
