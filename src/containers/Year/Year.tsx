import { createSignal, For, Match, splitProps, Switch } from 'solid-js';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { useSearchParams } from 'solid-start';
import { z } from 'zod';

import { YearContainerProps } from './types';
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
import { Select } from '@/components/Select';
import { MIN_YEAR } from '@/lib/constants';
import getDateFromURL from '@/lib/getDataFromURL';

export function YearContainer(props: YearContainerProps) {
  const [split, other] = splitProps(props, ['class']);

  const currentYear = new Date().getFullYear();

  const [, setSearchParams] = useSearchParams();
  const [date, setDate] = createSignal(getDateFromURL(true));

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
          <div class="flex">
            <Select
              label="Year"
              value={date().getFullYear()}
              onInput={(e) => {
                const newYear = z.coerce
                  .number()
                  .gte(MIN_YEAR - 1)
                  .lte(currentYear)
                  .safeParse(e.currentTarget.value);
                if (!newYear.success) {
                  return;
                }

                setSearchParams({ y: newYear.data });

                const newDate = dayjs(date()).set('year', newYear.data);
                setDate(newDate.toDate());
              }}
            >
              <For each={Array.from({ length: currentYear - MIN_YEAR })}>
                {(_, i) => {
                  const value = currentYear - i();

                  const isSelected = () => date().getFullYear() === value;

                  return (
                    <option
                      value={value}
                      disabled={isSelected()}
                      selected={isSelected()}
                      aria-selected={isSelected()}
                    >
                      {value}
                    </option>
                  );
                }}
              </For>
            </Select>
          </div>
        </section>

        <section class="mt-4">
          <div
            class={clsx(
              'rounded-xl bg-surface bg-gradient-to-br from-surface via-base to-base bg-[length:200%_200%] bg-left-top p-4 shadow',

              'dark:from-overlay dark:to-base dark:shadow-none'
            )}
          >
            <h2 class="text-xl font-semibold leading-none">Year in Review</h2>

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
            <For each={Array.from({ length: 12 })}>
              {(_, i) => (
                <Calendar class="w-full" defaultDate={new Date(2023, i(), 1)}>
                  <CalendarHeader disableArrows />

                  <CalendarBody>
                    <CalendarLabels />

                    <CalendarDays>
                      {({ date: dateProp, isOutside, isSelected }) => {
                        return (
                          <CalendarDay
                            date={dateProp}
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
                                    'bg-gold': dateProp.getDay() === 0,
                                    'bg-pine': dateProp.getDay() === 1,
                                    'bg-foam': dateProp.getDay() === 2,
                                    'bg-iris': dateProp.getDay() === 3,
                                    'bg-rose': dateProp.getDay() === 4,
                                    'bg-love': dateProp.getDay() === 5,
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
                                  <Match when={dateProp.getDay() === 0}>
                                    Happy
                                  </Match>
                                  <Match when={dateProp.getDay() === 1}>
                                    Sad
                                  </Match>
                                  <Match when={dateProp.getDay() === 2}>
                                    Productive
                                  </Match>
                                  <Match when={dateProp.getDay() === 3}>
                                    Sick / Tired
                                  </Match>
                                  <Match when={dateProp.getDay() === 4}>
                                    Average
                                  </Match>
                                  <Match when={dateProp.getDay() === 5}>
                                    Angry
                                  </Match>
                                </Switch>
                              </p>
                            </div>
                          </CalendarDay>
                        );
                      }}
                    </CalendarDays>
                  </CalendarBody>
                </Calendar>
              )}
            </For>
          </div>
        </section>
      </main>
    </>
  );
}
