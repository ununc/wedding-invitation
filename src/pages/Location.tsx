import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';
import { ClipBoard } from '../components/ClipBoard';
import CopyIcon from '../components/CopyIcon';

const location = '경기도 부천시 소사구 경인로 386';
export const Location = ({ setAppear }: { setAppear: () => void }) => {
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-4">
          L O C A T I O N
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          오시는 길
        </h2>
      </AppearObserver>
      <AppearObserver>
        <div className="mt-8 h-fit w-full">
          {/* TODO 가능하면 지도 zoom 되도록 */}
          <div className="map h-48 opacity-90"></div>
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="mt-8 text-center text-15 text-neutral-700 opacity-75">
          <ClipBoard text={location} setAppear={setAppear}>
            <div className="flex items-center text-sm">
              {location}
              <div className="opacity-60 ml-1.5">
                <CopyIcon />
              </div>
            </div>
          </ClipBoard>
          <div className="mt-2 text-sm">MJ컨벤션 5층 그랜드볼룸홀</div>
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="flex justify-between w-64 gap-2 items-center mx-auto text-xs opacity-75 mt-10">
          <a href="https://naver.me/xwmiFiaC">
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
              <div className="map-icon">
                <div className="naver w-full h-full"></div>
              </div>
              <div className="text-neutral-700 opacity-90 w-16 text-center text-xs">
                네이버 지도
              </div>
            </div>
          </a>

          <a href="https://kko.to/9qx3lZH994">
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
              <div className="map-icon ">
                <div className="kakao w-full h-full"></div>
              </div>
              <div className="text-neutral-700 opacity-90 text-xs w-16 text-center">
                카카오맵
              </div>
            </div>
          </a>

          <a href="https://tmap.life/9eac1d7d">
            <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
              <div className="map-icon">
                <div className="tmap w-full h-full"></div>
              </div>
              <div className="text-neutral-700 opacity-90 text-xs w-16 text-center">
                &nbsp;&nbsp;티맵&nbsp;&nbsp;
              </div>
            </div>
          </a>
        </div>
      </AppearObserver>
      <div className="h-5"></div>
    </Section>
  );
};
