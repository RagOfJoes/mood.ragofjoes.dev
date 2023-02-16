import { splitProps } from 'solid-js';

import clsx from 'clsx';
import dayjs from 'dayjs';

import { useCalendarCtx } from './Context';
import { CalendarHeaderProps } from './types';

  const [split, other] = splitProps(props, ['children', 'class', 'format']);
export function CalendarHeader(props: CalendarHeaderProps) {

  const [state, { onDateChange }] = useCalendarCtx();

  return (
    <div
      {...other}
      class={clsx(
        'Calendar-header',

        'flex gap-2 p-5',

        'max-md:p-2',

        split.class
      )}
    >
      <button
        aria-label="Previous month"
        class={clsx(
          'd-flex items-center justify-center rounded-md transition-transform',

          'hover:-translate-x-1'
        )}
        onClick={() =>
          onDateChange(dayjs(state.date).subtract(1, 'month').toDate())
        }
      >
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            fill-rule="evenodd"
          />
        </svg>
      </button>

      <button
        aria-label="Next month"
        class={clsx(
          'd-flex items-center justify-center rounded-md transition-transform',

          'hover:translate-x-1'
        )}
        onClick={() => onDateChange(dayjs(state.date).add(1, 'month').toDate())}
      >
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            fill-rule="evenodd"
          />
        </svg>
      </button>

      <button class="font-semibold">
        {dayjs(state.date).format(split.format ?? 'MMMM YYYY')}
      </button>
    </div>
  );
}
