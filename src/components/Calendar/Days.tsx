import { For, splitProps } from 'solid-js';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { useCalendarCtx } from './Context';
import { CalendarDaysProps } from './types';
import runIfFn from '@/lib/runIfFn';

export function CalendarDays(props: CalendarDaysProps) {
  const [split, other] = splitProps(props, ['children', 'class']);

  const [state] = useCalendarCtx();
  const daysLength = state.days.length - 1;

  return (
    <tbody {...other} class={clsx('Calendary-days', split.class)}>
      <For each={state.days}>
        {(week, i) => {
          const isLastWeek = i() === daysLength;

          const dates = week.map((day) => {
            const isOutside =
              day.getFullYear() !== state.date.getFullYear() ||
              day.getMonth() !== state.date.getMonth();
            const isWeekend = day.getDay() === 0 || day.getDay() === 6;

            const children = runIfFn(split.children, {
              date: day,
              isOutside,
              isSelected: dayjs(state.selected).isSame(dayjs(day)),
              isWeekend,
              selected: state.selected,
            });

            return (
              <td
                class={clsx(
                  'h-full border-r p-0 text-center',

                  'last:border-r-0'
                )}
              >
                {children}
              </td>
            );
          });

          return (
            <tr
              class={clsx(
                'h-full w-full',

                {
                  'border-b': !isLastWeek,
                }
              )}
            >
              {dates}
            </tr>
          );
        }}
      </For>
    </tbody>
  );
}
