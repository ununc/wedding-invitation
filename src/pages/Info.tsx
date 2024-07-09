import { Flower } from '../components/Flower';
import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import { ClipBoard } from '../components/ClipBoard';
import CopyIcon from '../components/CopyIcon';

export const Info = ({ setAppear }: { setAppear: () => void }) => {
  return (
    <Section>
      <div className="w-full mt-10">
        <AppearObserver>
          <div className="w-full opacity-[0.55]">
            <Flower />
          </div>
        </AppearObserver>
        <AppearObserver>
          <h2 className="text-sm h-12 mt-2 text-amber-950 opacity-[0.45] text-center">
            마음 전하실 곳
          </h2>
        </AppearObserver>

        <div className="flex flex-col justify-center items-center mt-1 w-8/12 mx-auto">
          <AppearObserver>
            <div className="relative w-full">
              <div className="w-full bg-amber-700 opacity-[0.08] text-center h-9 rounded-lg"></div>
              <div className="absolute absolute-center w-32 text-sm text-amber-950 opacity-60 text-center">
                신랑 측 계좌번호
              </div>
            </div>
            <div className="text-neutral-700 opacity-80 text-xs flex flex-col justify-center items-center gap-1 mt-2.5">
              <ClipBoard text="287701-04-294670" setAppear={setAppear}>
                <div className="flex items-center mt-1">
                  <div className="w-16">유호영 국민</div>
                  <div className="w-28 text-center">287701-04-294670</div>
                  <div className="opacity-60 ml-1.5">
                    <CopyIcon />
                  </div>
                </div>
              </ClipBoard>
              <ClipBoard text="351-0731-3257-43" setAppear={setAppear}>
                <div className="flex items-center mt-1.5">
                  <div className="w-16">노정연 농협</div>
                  <div className="w-28 text-center">351-0731-3257-43</div>
                  <div className="opacity-60 ml-1.5">
                    <CopyIcon />
                  </div>
                </div>
              </ClipBoard>

              <ClipBoard text="110-386-204-301" setAppear={setAppear}>
                <div className="flex items-center mt-1.5">
                  <div className="w-16">유형철 신한</div>
                  <div className="w-28 text-center">110-386-204301</div>
                  <div className="opacity-60 ml-1.5">
                    <CopyIcon />
                  </div>
                </div>
              </ClipBoard>
            </div>
          </AppearObserver>

          <AppearObserver>
            <div className="relative w-full mt-8">
              <div className="w-full bg-amber-700 opacity-[0.08] text-center h-9 rounded-lg"></div>
              <div className="absolute absolute-center w-32 text-sm text-amber-950 opacity-60 text-center">
                신부 측 계좌번호
              </div>
            </div>
            <div className="text-neutral-700 opacity-80 text-xs flex flex-col justify-center items-center gap-1 mt-2.5">
              <ClipBoard text="110-4690-78428" setAppear={setAppear}>
                <div className="flex items-center mt-1">
                  <div className="w-16">김정실 신한</div>
                  <div className="w-28 text-center">110-4690-78428</div>
                  <div className="opacity-60 ml-1.5">
                    <CopyIcon />
                  </div>
                </div>
              </ClipBoard>

              <ClipBoard text="1002-352-692357" setAppear={setAppear}>
                <div className="flex items-center mt-1.5">
                  <div className="w-16">이새봄 우리</div>
                  <div className="w-28 text-center">1002-352-692357</div>
                  <div className="opacity-60 ml-1.5">
                    <CopyIcon />
                  </div>
                </div>
              </ClipBoard>
            </div>
          </AppearObserver>
        </div>
      </div>
      <div className="mt-12 border-t-2 border-dashed border-amber-900 h-32 w-full text-sm flex flex-col items-center justify-center text-amber-950 opacity-40">
        <div>카카오톡 공유하기</div>
        <div className="mt-2">링크주소 복사하기</div>
        <div className="mt-2 text-[0.625rem]">
          Copyright 2024. <span className="font-bold">Yanagi</span> all rights
          reserved.
        </div>
      </div>
    </Section>
  );
};
