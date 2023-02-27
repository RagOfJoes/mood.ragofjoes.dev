import { splitProps } from 'solid-js';

import clsx from 'clsx';
import { IoSearch } from 'solid-icons/io';
import { A, useMatch } from 'solid-start';

import { HeaderProps } from './types';

export function Header(props: HeaderProps) {
  const [split, other] = splitProps(props, ['children', 'class']);

  const isMonth = useMatch(() => '/month');
  const isYear = useMatch(() => '/year');

  return (
    <header
      {...other}
      class={clsx(
        'mx-auto max-w-2xl p-8',

        'max-md:px-6',

        split.class
      )}
    >
      <nav class="flex items-center justify-between">
        <A
          href="/"
          class={clsx(
            'flex items-center justify-center rounded-lg p-2 text-2xl font-bold leading-none transition-all',

            'active:text-text',
            'focus:text-text focus:outline-none focus:ring',
            'hover:bg-muted/10'
          )}
        >
          <h1 class="text-xl font-bold leading-none">Mood</h1>
        </A>

        <div class="flex items-center gap-2">
          <A
            href="/month"
            aria-current={isMonth() && 'page'}
            class={clsx(
              'flex items-center justify-center rounded-lg p-2 text-sm font-medium text-subtle transition-all',

              'active:text-text',
              'aria-[current="page"]:text-text',
              'focus:text-text focus:outline-none focus:ring',
              'hover:bg-muted/10 hover:text-text'
            )}
          >
            Month
          </A>
          <A
            href="/year"
            aria-current={isYear() && 'page'}
            class={clsx(
              'flex items-center justify-center rounded-lg p-2 text-sm font-medium text-subtle transition-all',

              'active:text-text',
              'aria-[current="page"]:text-text',
              'focus:text-text focus:outline-none focus:ring',
              'hover:bg-muted/10 hover:text-text'
            )}
          >
            Year
          </A>
          <button
            class={clsx(
              'flex items-center justify-center rounded-lg border bg-transparent p-2 font-medium text-subtle transition-all',

              'disabled:cursor-not-allowed disabled:text-muted',
              'enabled:active:text-text',
              'enabled:focus:text-text enabled:focus:outline-none enabled:focus:ring',
              'enabled:hover:bg-muted/5 enabled:hover:text-text'
            )}
          >
            <IoSearch />
          </button>
        </div>
      </nav>
    </header>
  );
}
