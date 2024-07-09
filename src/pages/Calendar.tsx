import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import { Flower } from '../components/Flower';

export const Calendar = () => {
  return (
    <Section>
      <AppearObserver>
        <div className="w-full mt-20 mb-1.5 opacity-[0.55]">
          <Flower />
        </div>
      </AppearObserver>
      <AppearObserver>
        <h2 className="text-sm text-amber-950 tracking-tighter opacity-40 text-center">
          C A L E N D A R
        </h2>
      </AppearObserver>

      <AppearObserver>
        <div className="mt-8 text-center text-15 text-neutral-700 opacity-75">
          <div className="mt-2 text-sm">날짜 D-day 달력을 넣을 것</div>
        </div>
      </AppearObserver>

      <div className="h-5"></div>
    </Section>
  );
};
