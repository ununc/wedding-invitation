import { Hana } from '../components/Hana';
import { Section } from '../components/Section';

export const Invitation = () => {
  return (
    <Section>
      <div className="bg-white w-full">
        <Hana />
        <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
          INVITATION
        </h2>
        <div className="w-full text-center mt-5 sm:mt-7 sm:text-lg text-stone-800">
          <div>우리가 사랑함은</div>
          <div>그가 먼저 우리를 사랑하셨음이라</div>
          <div className="mt-1.5 sm:mt-2 text-sm sm:text-base">
            요한일서 4:19
          </div>
        </div>

        <div className="w-full pb-8 sm:pb-10 flex flex-col gap-1.5 text-center mt-5 sm:mt-7 text-[0.9rem] sm:text-base text-stone-700">
          <div>가장 좋은 때에, 가장 좋은 사람을 만났습니다.</div>
          <div>이 만남을 뭐라고 불러야 할지 고민하다가</div>
          <div>'인도하심'으로 설명할 수 있음을 알았습니다.</div>
          <div className="mt-2.5 sm:mt-3">
            이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
          </div>
          <div>겸손과 온유와 사랑으로</div>
          <div>하나님이 기뻐하시는 가정을 만들어가겠습니다.</div>
          <div className="mt-2.5 sm:mt-3">부부로 시작하는 첫 순간에</div>
          <div>소중한 당신을 초대하고 싶습니다.</div>
        </div>
      </div>

      <div className="w-full py-8 flex justify-center items-center">
        <div className="text-end mr-5">
          <div className="text-zinc-500 sm:text-[1.06rem] mb-4 sm:mb-[0.6rem] ">
            유호영 • 노정연 의 장남
          </div>
          <div className="h-8"></div>
          <div className="text-zinc-500 sm:text-[1.06rem] mt-1 sm:mt-4">
            故이종성 • 김정실 의 장녀
          </div>
        </div>
        <div className="flex flex-col justify-end items-center mr-[1.125rem]">
          <div className="text-center text-xl sm:text-[1.375rem]">유형철</div>
          <div className="text-end py-3 sm:py-4">🩵</div>
          <div className="text-center text-xl sm:text-[1.375rem]">이새봄</div>
        </div>
      </div>
    </Section>
  );
};
