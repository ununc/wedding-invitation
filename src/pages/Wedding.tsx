import { Hana } from '../components/Hana';
import { Section } from '../components/Section';
import calendar from '/calendar.jpg';
export const Wedding = () => {
  return (
    <Section>
      <div className="flex flex-col items-center bg-white w-full relative">
        <Hana />
        <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
          WEDDING
        </h2>
        <div className="mt-8 h-fit w-[85%]">
          <img className=" rounded-2xl" src={calendar} />
        </div>
        <div className="mt-8 border border-green-700 h-48 w-[85%]">
          네이버 지도 및 카카오 지도 링크 작업
        </div>
        <div className="mt-8 border border-green-700 h-48 w-[85%]">
          교통편 버스 지하철 승용차
        </div>
        <div className=" h-8"></div>
      </div>
    </Section>
  );
};
