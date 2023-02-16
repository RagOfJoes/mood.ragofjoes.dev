import { For, splitProps } from 'solid-js';

import clsx from 'clsx';

import { MoodBarProps } from './types';

export function MoodBar(props: MoodBarProps) {
  const [split, other] = splitProps(props, ['children', 'class', 'moods']);

  const sortedMoods = split.moods.sort((a, b) => b.count - a.count);
  const total = sortedMoods.reduce((acc, mood) => acc + mood.count, 0);

  return (
    <div {...other} class={split.class}>
      <div class="flex h-5 w-full gap-0.5 overflow-hidden rounded-md">
        <For each={sortedMoods}>
          {(mood) => (
            <div
              class={clsx(
                'w-full rounded-md',

                {
                  'bg-love': mood.mood === 'ANGRY',
                  'bg-rose': mood.mood === 'AVERAGE',
                  'bg-gold': mood.mood === 'HAPPY',
                  'bg-foam': mood.mood === 'PRODUCTIVE',
                  'bg-pine': mood.mood === 'SAD',
                  'bg-iris': mood.mood === 'SICK',
                }
              )}
              // Using inline styles here because tailwind doesn't support template literals
              style={{ 'flex-basis': `${(mood.count / total) * 100}%` }}
            />
          )}
        </For>
      </div>

      <div class="mt-2 flex flex-wrap gap-2">
        <For each={sortedMoods}>
          {(mood) => (
            <div class="flex items-center gap-1">
              <div
                class={clsx(
                  'h-2 w-2 rounded-full',

                  {
                    'bg-love': mood.mood === 'ANGRY',
                    'bg-rose': mood.mood === 'AVERAGE',
                    'bg-gold': mood.mood === 'HAPPY',
                    'bg-foam': mood.mood === 'PRODUCTIVE',
                    'bg-pine': mood.mood === 'SAD',
                    'bg-iris': mood.mood === 'SICK',
                  }
                )}
              />
              <p class="truncate text-xs font-semibold capitalize">
                {mood.mood}
              </p>
              <p class="trunacte text-xs font-semibold text-subtle">
                {((mood.count / total) * 100).toFixed(2)}%
              </p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
