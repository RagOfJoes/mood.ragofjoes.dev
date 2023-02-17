import { Accessor, ComponentProps, JSX, Setter } from 'solid-js';

export type CalendarProps = ComponentProps<'div'> & {
  date?: Accessor<Date>;
  defaultDate?: Date;
  defaultSelected?: Date;
  onDateChange?: Setter<Date>;
  onSelectedChange?: Setter<Date>;
  selected?: Accessor<Date>;
  startDay?: 'monday' | 'sunday';
};

export type CalendarHeaderProps = ComponentProps<'div'> & {
  disableArrows?: boolean;
  format?: string;
};

export type CalendarBodyProps = ComponentProps<'table'>;

export type CalendarLabelsProps = ComponentProps<'thead'> & {
  format?: 'long' | 'narrow' | 'short';
};

export type CalendarDaysProps = Omit<ComponentProps<'tbody'>, 'children'> & {
  children?:
    | JSX.Element
    | ((props: {
        date: Date;
        isOutside: boolean;
        isSelected: boolean;
        isWeekend: boolean;
        selected: Date;
      }) => JSX.Element | undefined);
};

export type CalendarDayProps = ComponentProps<'div'> & {
  date: Date;
  isDisabled?: boolean;
  isOutside?: boolean;
  isSelected?: boolean;
};

export type UseCalendarState = {
  calendarProps: Required<Pick<CalendarProps, 'startDay'>>;
  date: Date;
  days: Date[][];
  selected: Date;
  isControlledDate: boolean;
  isControlledSelected: boolean;
  uncontrolledDate: Date;
  uncontrolledSelected: Date;
};

export type UseCalendarActions = {
  onDateChange: (newDate: Date) => void;
  onSelectedChange: (newDate: Date) => void;
};

export type UseCalendarReturn = [UseCalendarState, UseCalendarActions];
