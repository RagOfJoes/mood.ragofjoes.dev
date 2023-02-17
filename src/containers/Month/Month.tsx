import { Match, splitProps, Switch } from 'solid-js';

import clsx from 'clsx';

import { MonthContainerProps } from './types';
import {
  Calendar,
  CalendarBody,
  CalendarDay,
  CalendarDays,
  CalendarHeader,
  CalendarLabels,
} from '@/components/Calendar';
import { Header } from '@/components/Header';
import { MoodBar } from '@/components/MoodBar';

export function MonthContainer(props: MonthContainerProps) {
  const [split, other] = splitProps(props, ['class']);

  return (
    <>
      <Header />

      <main
        {...other}
        class={clsx(
          'mx-auto max-w-2xl px-8 pb-8',

          'max-md:px-6',

          split.class
        )}
      >
        <section>
          <div
            class={clsx(
              'rounded-xl bg-surface bg-gradient-to-br from-surface via-base to-base bg-[length:200%_200%] bg-left-top p-4 shadow',

              'dark:from-overlay dark:to-base dark:shadow-none'
            )}
          >
            <h2 class="text-xl font-semibold leading-none">Month in Review</h2>

            <MoodBar
              class="mt-4"
              moods={[
                { mood: 'ANGRY', count: 8 },
                { mood: 'AVERAGE', count: 100 },
                { mood: 'HAPPY', count: 90 },
                { mood: 'PRODUCTIVE', count: 80 },
                { mood: 'SAD', count: 60 },
                { mood: 'SICK', count: 8 },
              ]}
            />
          </div>

          <div class="mt-8 flex flex-col items-center justify-center gap-8">
            <Calendar class="w-full">
              <CalendarHeader disableArrows />

              <CalendarBody>
                <CalendarLabels />

                <CalendarDays>
                  {({ date, isOutside, isSelected }) => {
                    return (
                      <CalendarDay
                        date={date}
                        isOutside={isOutside}
                        isSelected={isSelected}
                        onClick={() => {}}
                      >
                        <div
                          class={clsx(
                            'flex w-full basis-1/2 items-center gap-1 px-4',

                            'max-md:px-2',
                            'max-sm:justify-center max-sm:px-1'
                          )}
                        >
                          <div
                            class={clsx(
                              'h-2 w-2 flex-shrink-0 rounded-full',

                              'group-data-[outside=true]:opacity-60',

                              {
                                'bg-gold': date.getDay() === 0,
                                'bg-pine': date.getDay() === 1,
                                'bg-foam': date.getDay() === 2,
                                'bg-iris': date.getDay() === 3,
                                'bg-rose': date.getDay() === 4,
                                'bg-love': date.getDay() === 5,
                              }
                            )}
                          />
                          <p
                            class={clsx(
                              'truncate text-xs font-semibold',

                              'group-data-[outside=true]:text-subtle',

                              'max-sm:hidden'
                            )}
                          >
                            <Switch>
                              <Match when={date.getDay() === 0}>Happy</Match>
                              <Match when={date.getDay() === 1}>Sad</Match>
                              <Match when={date.getDay() === 2}>
                                Productive
                              </Match>
                              <Match when={date.getDay() === 3}>
                                Sick / Tired
                              </Match>
                              <Match when={date.getDay() === 4}>Average</Match>
                              <Match when={date.getDay() === 5}>Angry</Match>
                            </Switch>
                          </p>
                        </div>
                      </CalendarDay>
                    );
                  }}
                </CalendarDays>
              </CalendarBody>
            </Calendar>
          </div>
        </section>
      </main>
    </>
  );
}
