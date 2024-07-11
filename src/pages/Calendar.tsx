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
        <div className="mt-8 mx-auto w-11/12 flex flex-col justify-center items-center text-15">
          <div className="text-center text-neutral-700 opacity-70">
            <div className="text-base">시 월</div>
          </div>
          <div className="mt-4 text-neutral-500 opacity-70">
            <div className="flex gap-4 justify-center items-center text-center py-1.5 ">
              <div className="w-8 h-8 leading-8">일</div>
              <div className="w-8 h-8 leading-8">월</div>
              <div className="w-8 h-8 leading-8">화</div>
              <div className="w-8 h-8 leading-8">수</div>
              <div className="w-8 h-8 leading-8">목</div>
              <div className="w-8 h-8 leading-8">금</div>
              <div className="w-8 h-8 leading-8">토</div>
            </div>
            <div className="h-1 border-t border-amber-950/60"></div>
            <div className="flex gap-4 justify-center items-center text-center py-2.5">
              <div className="w-8 h-8 leading-8">&nbsp;</div>
              <div className="w-8 h-8 leading-8">&nbsp;</div>
              <div className="w-8 h-8 leading-8">1</div>
              <div className="w-8 h-8 leading-8">2</div>
              <div className="w-8 h-8 leading-8">3</div>
              <div className="w-8 h-8 leading-8">4</div>
              <div className="w-8 h-8 leading-8">5</div>
            </div>
            <div className="flex gap-4 justify-center items-center text-center py-2.5">
              <div className="w-8 h-8 leading-8">6</div>
              <div className="w-8 h-8 leading-8">7</div>
              <div className="w-8 h-8 leading-8">8</div>
              <div className="w-8 h-8 leading-8 bg-amber-950/80 text-white rounded-lg relative">
                9
                <div className="absolute w-12 text-xs -bottom-5 -left-[0.45rem] text-amber-950">
                  한글날
                </div>
              </div>
              <div className="w-8 h-8 leading-8">10</div>
              <div className="w-8 h-8 leading-8">11</div>
              <div className="w-8 h-8 leading-8">12</div>
            </div>
            <div className="flex gap-4 justify-center items-center text-center py-2.5">
              <div className="w-8 h-8 leading-8">13</div>
              <div className="w-8 h-8 leading-8">14</div>
              <div className="w-8 h-8 leading-8">15</div>
              <div className="w-8 h-8 leading-8">16</div>
              <div className="w-8 h-8 leading-8">17</div>
              <div className="w-8 h-8 leading-8">18</div>
              <div className="w-8 h-8 leading-8">19</div>
            </div>
            <div className="flex gap-4 justify-center items-center text-center py-2.5">
              <div className="w-8 h-8 leading-8">20</div>
              <div className="w-8 h-8 leading-8">21</div>
              <div className="w-8 h-8 leading-8">22</div>
              <div className="w-8 h-8 leading-8">23</div>
              <div className="w-8 h-8 leading-8">24</div>
              <div className="w-8 h-8 leading-8">25</div>
              <div className="w-8 h-8 leading-8">26</div>
            </div>
            <div className="flex gap-4 justify-center items-center text-center py-2.5">
              <div className="w-8 h-8 leading-8">27</div>
              <div className="w-8 h-8 leading-8">28</div>
              <div className="w-8 h-8 leading-8">29</div>
              <div className="w-8 h-8 leading-8">30</div>
              <div className="w-8 h-8 leading-8">31</div>
              <div className="w-8 h-8 leading-8">&nbsp;</div>
              <div className="w-8 h-8 leading-8">&nbsp;</div>
            </div>
          </div>
          <div className="mt-5 text-base text-neutral-700 opacity-80">
            D-Day {Math.ceil(d)}
          </div>
        </div>
      </AppearObserver>

      <div className="h-5"></div>
    </Section>
  );
};
