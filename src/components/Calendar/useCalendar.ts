import { splitProps } from 'solid-js';

import { createStore } from 'solid-js/store';

import { CalendarProps, UseCalendarReturn, UseCalendarState } from './types';
import { getStartOfWeek } from './utils';
import runIfFn from '@/lib/runIfFn';

function useCalendar(props: CalendarProps): UseCalendarReturn {
  const [split, other] = splitProps(props, ['startDay']);

  const [state, setState] = createStore<UseCalendarState>(
    {
      uncontrolledDate: other.defaultDate ?? new Date(),
      uncontrolledSelected: other.defaultSelected ?? new Date(),

      get calendarProps() {
        return {
          startDay: 'sunday',
          ...split,
        } satisfies UseCalendarState['calendarProps'];
      },
      get date() {
        if (this.isControlledDate) {
          return other.date!();
        }

        return this.uncontrolledDate;
      },
      get days() {
        const month = this.date.getMonth();
        const year = this.date.getFullYear();

        const startMonth = new Date(year, month, 1);
        const startWeek = getStartOfWeek(
          startMonth,
          this.calendarProps.startDay
        );

        const ret = [];

        while (ret.length < 6) {
          const arr = [];

          for (let i = 0; i < 7; i += 1) {
            arr.push(new Date(startWeek));
            startWeek.setDate(startWeek.getDate() + 1);
          }

          ret.push(arr);
        }

        return ret;
      },
      get isControlledDate() {
        return other.date !== undefined;
      },
      get isControlledSelected() {
        return other.selected !== undefined;
      },
      get selected() {
        if (this.isControlledSelected) {
          return other.selected!();
        }

        return this.uncontrolledSelected;
      },
    },
    {
      name: 'CalendarState',
    }
  );

  const onDateChange = (newDate: Date) => {
    if (state.isControlledDate) {
      runIfFn(other.onDateChange, newDate);
      return;
    }

    setState('uncontrolledDate', newDate);
  };
  const onSelectedChange = (newDate: Date) => {
    if (state.isControlledSelected) {
      runIfFn(other.onSelectedChange, newDate);
      return;
    }

    setState('uncontrolledSelected', newDate);
  };

  return [state, { onDateChange, onSelectedChange }];
}

export default useCalendar;
