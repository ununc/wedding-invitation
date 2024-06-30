import { Hana } from '../components/Hana';
import { Section } from '../components/Section';

export const Gallery = () => {
  return (
    <Section>
      <Hana />
      <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
        GALLERY
      </h2>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        사진 테마 1 슬라이드3장 마지막 4 (더보기)
      </div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        사진 테마 2 클릭 시 더 보여지는 방식?
      </div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        사진 테마 3 ex) 1/10, 3/10 총량 표시
      </div>
      <div className=" h-8"></div>
    </Section>
  );
};
