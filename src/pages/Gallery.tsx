import { AppearObserver } from '../components/AppearObserver';
import { Section } from '../components/Section';

const block1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const block2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

export const Gallery = ({
  setIndex,
}: {
  setIndex: (index: number) => void;
}) => {
  const clickImg = (index: number) => {
    setIndex(index);
    document.body.style.overflow = 'hidden';
  };
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-10">
          G A L L E R Y
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          갤러리
        </h2>
      </AppearObserver>
      <AppearObserver>
        <div className="flex flex-wrap gap-2 w-[23rem] mx-auto justify-center items-center mt-10">
          {block1.map((index) => {
            return (
              <div
                key={index + '1b'}
                onClick={() => clickImg(index)}
                className="w-[4.9rem] h-[4.9rem] cursor-pointer overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={`/thumb/thumb-${index}.jpg`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="flex flex-wrap gap-2 w-[23rem] mx-auto justify-center items-center mt-2">
          {block2.map((index) => {
            return (
              <div
                key={index + '2b'}
                onClick={() => clickImg(index)}
                className="w-[4.9rem] h-[4.9rem] cursor-pointer overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={`/thumb/thumb-${index}.jpg`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="text-center text-xs text-neutral-700 opacity-40 mt-7">
          사진을 눌러보세요
        </div>
      </AppearObserver>
    </Section>
  );
};
