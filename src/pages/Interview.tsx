import { Hana } from "../components/Hana";
import { Section } from "../components/Section";

export const Interview = () => {
  return (
    <Section classNames=" mt-5">
      <Hana />
      <h2 className="italic text-3xl text-center">INTERVIEW</h2>
      <div className="w-full text-center mt-5">
        <div>우리가 사랑함은</div>
        <div>그가 먼저 우리를 사랑하셨음이라</div>
        <div className="mt-1.5 text-sm">요한일서 4:19</div>
      </div>

      <div className="w-full flex flex-col gap-1.5 text-center  mt-5 text-[15px]">
        <div>가장 좋은 때에, 가장 좋은 사람을 만났습니다.</div>
        <div>이 만남을 뭐라고 불러야 할지 고민하다가</div>
        <div>'인도하심'으로 설명할 수 있음을 알았습니다.</div>
        <div className="mt-2.5">
          이제 단 한 번뿐인 귀한 삶을 함께하기로 약속합니다.
        </div>
        <div>겸손과 온유와 사랑으로</div>
        <div>하나님이 기뻐하시는 가정을 만들어가게습니다.</div>
        <div className="mt-2">부부로 시작하는 첫 순간에</div>
        <div>소중한 당신을 초대하고 싶습니다.</div>
      </div>
    </Section>
  );
};
