import { useSearchParams } from 'solid-start';
import { z } from 'zod';

import { MIN_YEAR } from './constants';

function getDateFromURL(omitMonth?: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();

  const date = new Date();

  const possibleMonth = z.coerce
    .number()
    .gte(1)
    .lte(12)
    .safeParse(searchParams.m);
  const possibleYear = z.coerce
    .number()
    .gte(MIN_YEAR - 1)
    .lte(date.getFullYear())
    .safeParse(searchParams.y);
  if (!omitMonth && !possibleMonth.success) {
    setSearchParams({ m: date.getMonth() + 1 });
  }
  if (!possibleYear.success) {
    setSearchParams({ y: date.getFullYear() });
  }

  const month = possibleMonth.success
    ? possibleMonth.data
    : date.getMonth() + 1;
  const year = possibleYear.success ? possibleYear.data : date.getFullYear();

  date.setFullYear(year, month - 1);

  return date;
}

export default getDateFromURL;
