import { Section } from '../components/Section';
import { Flower } from '../components/Flower';
import { AppearObserver } from '../components/AppearObserver';

export const Invitation = () => {
  return (
    <Section classNames="mt-4">
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center">
          I N V I T A T I O N
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          초대합니다
        </h2>
      </AppearObserver>
      <AppearObserver>
        <div className="w-full mt-6 mb-2 opacity-[0.55]">
          <Flower />
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="text-15 sm:text-lg text-neutral-700 opacity-75 text-center mt-3">
          <div className="">우리가 사랑함은</div>
          <div>그가 먼저 우리를 사랑하셨음이라</div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-base">
            요한일서 4:19
          </div>
        </div>
      </AppearObserver>

      <div className="mt-5 sm:mt-7 text-sm sm:text-bases text-neutral-700 opacity-75 text-center">
        <AppearObserver>
          <div className="mt-2">
            가장 좋은 때에, 가장 좋은 사람을 만났습니다.
          </div>
          <div className="mt-2">이 만남을 뭐라고 불러야 할지 고민하다가</div>
          <div className="mt-2">
            '인도하심'으로 설명할 수 있음을 알았습니다.
          </div>
        </AppearObserver>
        <AppearObserver>
          <div className="mt-2">
            이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
          </div>
          <div className="mt-2">겸손과 온유와 사랑으로</div>
          <div className="mt-2">
            하나님이 기뻐하시는 가정을 만들어가겠습니다.
          </div>
        </AppearObserver>
        <AppearObserver>
          <div className="mt-2">부부로 시작하는 첫 순간에</div>
          <div className="mt-2">소중한 당신을 초대하고 싶습니다.</div>
        </AppearObserver>
      </div>

      <AppearObserver>
        <div className="text-lg sm:text-xl py-16 flex justify-center items-center text-neutral-700 opacity-75">
          <div className="text-end mr-4 sm:mr-6">
            <div className="h-7  mb-0.5 sm:mb-[1.125rem] ">
              유호영 • 노정연
              <span className="pl-1 text-[0.9rem] sm:text-base text-amber-950 opacity-50">
                의 장남
              </span>
            </div>
            <div className="h-1.5"></div>
            <div className="h-7 mt-3 sm:mt-2.5">
              故이종성 • 김정실
              <span className="pl-1 text-[0.9rem] sm:text-base text-amber-950 opacity-50">
                의 장녀
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center mr-[1.125rem] sm:mr-5">
            <div>형철</div>
            <div className="h-5"></div>
            <div>새봄</div>
          </div>
        </div>
      </AppearObserver>
    </Section>
  );
};
