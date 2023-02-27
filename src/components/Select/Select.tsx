import { createUniqueId, splitProps } from 'solid-js';

import clsx from 'clsx';
import { IoChevronDown } from 'solid-icons/io';

import { SelectProps } from './types';

export function Select(props: SelectProps) {
  const [split, other] = splitProps(props, ['class', 'id', 'label']);

  const id = split.id ?? createUniqueId();

  return (
    <div
      class={clsx(
        'relative flex shrink-0 items-center text-subtle',

        'focus:text-text',
        'hover:text-text',

        split.class
      )}
    >
      <label for={id} class="sr-only">
        {split.label}
      </label>
      <select
        {...other}
        id={id}
        aria-label={split.label}
        class={clsx(
          'peer cursor-pointer appearance-none rounded-lg bg-surface py-2 pl-2 pr-6 font-medium text-inherit shadow transition-all',

          'dark:bg-gradient-to-br dark:from-overlay dark:to-base dark:bg-[length:200%_200%] dark:bg-left-top dark:shadow-none',
          'focus:outline-none focus:ring'
        )}
      />

      <div class="pointer-events-none absolute right-0 z-10 mr-2 mt-px transition-all">
        <IoChevronDown />
      </div>
    </div>
  );
}
