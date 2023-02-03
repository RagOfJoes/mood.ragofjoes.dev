import { For, splitProps } from 'solid-js';

import clsx from 'clsx';

import { useCalendarCtx } from './Context';
import { CalendarDaysProps } from './types';
import runIfFn from '@/lib/runIfFn';

export const CalendarDays = (props: CalendarDaysProps) => {
  const [split, other] = splitProps(props, ['children', 'class']);

  const [state] = useCalendarCtx();

  return (
    <tbody {...other} class={clsx('Calendary-days', split.class)}>
      <For each={state.days}>
        {(week, i) => {
          const isLastWeek = i() === state.days.length - 1;

          const dates = week.map((day) => {
            const isOutside =
              day.getFullYear() !== state.date.getFullYear() ||
              day.getMonth() !== state.date.getMonth();
            const isWeekend = day.getDay() === 0 || day.getDay() === 6;

            const children = runIfFn(split.children, {
              date: day,
              isOutside,
              isSelected: false,
              isWeekend,
              selected: state.selected,
            });

            return (
              <td
                class={clsx(
                  'h-full border-r border-r-muted/20 text-center',

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
                  'border-b border-b-muted/20': !isLastWeek,
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
};
