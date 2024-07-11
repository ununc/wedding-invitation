import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import { Flower } from '../components/Flower';

export const Calendar = () => {
  const date = new Date().getTime();
  const wedding = new Date('2024-10-09').getTime();
  const d = (wedding - date) / 1000 / 60 / 60 / 24;
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
        <div className="mt-8 mx-auto w-11/12 flex flex-col justify-center items-center text-15 text-neutral-700 opacity-60">
          <div className="text-center">
            <div className="text-base">시 월</div>
          </div>
          <div className="mt-4">
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">일</div>
              <div className="w-4">월</div>
              <div className="w-4">화</div>
              <div className="w-4">수</div>
              <div className="w-4">목</div>
              <div className="w-4">금</div>
              <div className="w-4">토</div>
            </div>
            <div className="h-1 border-t border-amber-950/60"></div>
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">&nbsp;</div>
              <div className="w-4">&nbsp;</div>
              <div className="w-4">1</div>
              <div className="w-4">2</div>
              <div className="w-4">3</div>
              <div className="w-4">4</div>
              <div className="w-4">5</div>
            </div>
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">6</div>
              <div className="w-4">7</div>
              <div className="w-4">8</div>
              <div className="w-4">9</div>
              <div className="w-4">10</div>
              <div className="w-4">11</div>
              <div className="w-4">12</div>
            </div>
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">13</div>
              <div className="w-4">14</div>
              <div className="w-4">15</div>
              <div className="w-4">16</div>
              <div className="w-4">17</div>
              <div className="w-4">18</div>
              <div className="w-4">19</div>
            </div>
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">20</div>
              <div className="w-4">21</div>
              <div className="w-4">22</div>
              <div className="w-4">23</div>
              <div className="w-4">24</div>
              <div className="w-4">25</div>
              <div className="w-4">26</div>
            </div>
            <div className="flex gap-7 justify-center items-center text-center py-2.5">
              <div className="w-4">27</div>
              <div className="w-4">28</div>
              <div className="w-4">29</div>
              <div className="w-4">30</div>
              <div className="w-4">31</div>
              <div className="w-4">&nbsp;</div>
              <div className="w-4">&nbsp;</div>
            </div>
          </div>
          <div className="mt-5 text-15">한글날 낮 12:00</div>
          <div className="mt-3 text-15">D-Day {Math.ceil(d)}</div>
        </div>
      </AppearObserver>

      <div className="h-5"></div>
    </Section>
  );
};
