import { AppearObserver } from '../components/AppearObserver';
import { Section } from '../components/Section';

export const Gallery = () => {
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-4">
          G A L L E R Y
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          갤러리
        </h2>
      </AppearObserver>
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
