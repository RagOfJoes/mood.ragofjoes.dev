import { CalendarProps } from './types';

export function getNarrowLabels(startDay: CalendarProps['startDay']): string[] {
  if (startDay === 'sunday') {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  }

  return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
}

export function getStartOfWeek(
  date: Date,
  startDay: CalendarProps['startDay']
): Date => {
  const day = date.getDay() || 7;
  const isSundayStartDay = startDay === 'sunday';
  const clampToFirstDay = isSundayStartDay ? day : day - 1;

  if ((isSundayStartDay && day !== 0) || day !== 1) {
    date.setHours(-24 * clampToFirstDay);
  }

  return date;
}
