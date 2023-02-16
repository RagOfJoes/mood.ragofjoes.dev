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
  ]);

  return (
    <div
      class={clsx(
        'relative',

        'before:block before:h-0 before:pb-[125%] before:content-[""]'
      )}
    >
      <div
        {...other}
        data-outside={split.isOutside}
        data-disabled={split.isDisabled}
        data-selected={split.isSelected}
        class={clsx(
          'group absolute inset-0 flex h-full w-full flex-col items-center p-3',

          'max-md:p-2',

          split.class
        )}
      >
        <button
          class={clsx(
            'flex items-center justify-center rounded-full font-bold transition-colors',

            'enabled:focus-visible:outline-none',
            'group-data-[outside=true]:text-subtle'
          )}
        >
          {split.date.getDate().toString()}
        </button>

        {split.children}
      </div>
    </div>
  );
}
