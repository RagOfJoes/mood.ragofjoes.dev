import { splitProps } from 'solid-js';

import clsx from 'clsx';

import { HomeContainerProps } from './types';
import { Header } from '@/components/Header';

export function HomeContainer(props: HomeContainerProps) {
  const [split, other] = splitProps(props, ['class']);

  return (
    <>
      <Header />

      <main
        {...other}
        class={clsx(
          'mx-auto max-w-2xl px-8',

          'max-md:px-6',

          split.class
        )}
      >
        <section>
          <h2 class="text-2xl font-semibold leading-none">Home</h2>
        </section>
      </main>
    </>
  );
}
