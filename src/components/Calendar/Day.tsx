import { splitProps } from 'solid-js';

import clsx from 'clsx';

import { CalendarDayProps } from './types';

export function CalendarDay(props: CalendarDayProps) {
  const [split, other] = splitProps(props, [
    'children',
    'class',
    'date',
    'isDisabled',
    'isOutside',
    'isSelected',
    'onClick',
  ]);

  return (
    <div
      class={clsx(
        'relative',

        'before:block before:h-0 before:pb-[100%] before:content-[""]'
      )}
    >
      <div
        {...other}
        data-outside={split.isOutside}
        data-disabled={split.isDisabled}
        data-selected={split.isSelected}
        class={clsx(
          'group absolute inset-0 flex h-full w-full flex-col items-center py-3',

          'max-md:py-1',

          split.class
        )}
      >
        <div class="flex w-full basis-1/2 items-center justify-center">
          <button
            class={clsx(
              'flex h-5 w-5 items-center justify-center rounded-full font-bold leading-none transition-all',

              'disabled:cursor-not-allowed disabled:text-muted',
              'enabled:active:text-text',
              'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
              'enabled:hover:text-text',
              'group-data-[outside=true]:text-subtle'
            )}
            onClick={(e) => {
              if (typeof split.onClick === 'function') {
                split.onClick(e);
              }
            }}
          >
            {split.date.getDate().toString()}
          </button>
        </div>

        {split.children}
      </div>
    </div>
  );
}
