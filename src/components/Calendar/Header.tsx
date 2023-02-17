import { splitProps } from 'solid-js';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { IoChevronBack, IoChevronForward, IoSettings } from 'solid-icons/io';

import { useCalendarCtx } from './Context';
import { CalendarHeaderProps } from './types';

export function CalendarHeader(props: CalendarHeaderProps) {
  const [split, other] = splitProps(props, [
    'children',
    'class',
    'disableArrows',
    'format',
  ]);

  const [state, { onDateChange }] = useCalendarCtx();

  return (
    <div
      {...other}
      class={clsx(
        'Calendar-header',

        'flex items-center justify-between py-5 px-8',

        'max-md:px-4',

        split.class
      )}
    >
      <div
        class={clsx(
          'flex h-9 basis-3/4 items-center gap-2 rounded-full border bg-muted/5',

          {
            'justify-between': !split.disableArrows,
            'justify-center': split.disableArrows,
          }
        )}
      >
        {!split.disableArrows && (
          <button
            aria-label="Previous month"
            class={clsx(
              'flex items-center justify-center rounded-full p-2 text-subtle transition-all',

              'disabled:cursor-not-allowed disabled:text-muted',
              'enabled:active:text-text',
              'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
              'enabled:hover:text-text'
            )}
            onClick={() =>
              onDateChange(dayjs(state.date).subtract(1, 'month').toDate())
            }
          >
            <IoChevronBack size={18} />
          </button>
        )}

        <button
          class={clsx(
            'flex items-center justify-center rounded-full p-2 font-semibold leading-[18px] text-subtle transition-all',

            'disabled:cursor-not-allowed disabled:text-muted',
            'enabled:active:text-text',
            'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
            'enabled:hover:text-text'
          )}
        >
          {dayjs(state.date).format(split.format ?? 'MMMM YYYY')}
        </button>

        {!split.disableArrows && (
          <button
            aria-label="Next month"
            class={clsx(
              'flex items-center justify-center rounded-full p-2 text-subtle transition-all',

              'disabled:cursor-not-allowed disabled:text-muted',
              'enabled:active:text-text',
              'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
              'enabled:hover:text-text'
            )}
            onClick={() =>
              onDateChange(dayjs(state.date).add(1, 'month').toDate())
            }
          >
            <IoChevronForward size={18} />
          </button>
        )}
      </div>

      <div class="flex">
        <button
          aria-label="Calendar settings"
          class={clsx(
            'flex items-center justify-center rounded-full p-2 text-subtle transition-all',

            'disabled:cursor-not-allowed disabled:text-muted',
            'enabled:active:text-text',
            'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
            'enabled:hover:text-text'
          )}
        >
          <IoSettings size={18} />
        </button>
      </div>
    </div>
  );
}
