import {
  Calendar,
  CalendarBody,
  CalendarDay,
  CalendarDays,
  CalendarHeader,
  CalendarLabels,
} from '@/components/Calendar';

const Home = () => {
  return (
    <main class="mx-auto max-w-3xl p-4 text-center">
      <section class="flex items-center justify-center">
        <Calendar class="w-full">
          <CalendarHeader />

          <CalendarBody>
            <CalendarLabels />

            <CalendarDays>
              {({ date, isOutside, isSelected }) => {
                return (
                  <CalendarDay
                    date={date}
                    isOutside={isOutside}
                    isSelected={isSelected}
                  />
                );
              }}
            </CalendarDays>
          </CalendarBody>
        </Calendar>
      </section>
    </main>
  );
};

export default Home;
