import { UseCalendarReturn } from './types';
import { createContext } from '@/lib/createContext';

export const [CalendarProvider, useCalendarCtx] =
  createContext<UseCalendarReturn>({
    hookName: 'useCalendar',
    name: 'Calendar',
    providerName: 'CalendarProvider',
  });
