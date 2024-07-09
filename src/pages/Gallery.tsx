import { AppearObserver } from '../components/AppearObserver';
import { Section } from '../components/Section';
const left =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9729.jpg?alt=media&token=f9f6c6cf-2978-47f7-b3e3-31f71af61894';
const right =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9738.jpg?alt=media&token=06e46b95-a0a0-48dc-b4fc-7806170683ed';
const left2 =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/b-2.jpg?alt=media&token=8f472f27-75bf-416a-88af-9ca4808a540f';
const right2 =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/b-1.jpg?alt=media&token=bfba187b-555b-4634-8d19-c78139180fbe';
const left3 =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KakaoTalk_20240627_224543615_01.jpg?alt=media&token=99d2e8f5-88f2-4b49-bcc9-fdbf4b445ad3';
const right3 =
  'https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KakaoTalk_20240627_224543615.jpg?alt=media&token=70813d66-e9fc-43bc-9e2b-b69fd1c5df0e';

const urlList1 = [
  left,
  right,
  left,
  right,
  left,
  right,
  left,
  right,
  left,
  right,
  left,
  right,
];
const urlList2 = [
  left2,
  right2,
  left2,
  right2,
  left2,
  right2,
  left2,
  right2,
  left3,
  right3,
  left3,
  right3,
  left3,
  right3,
  left3,
  right3,
];

export const Gallery = () => {
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-6">
          G A L L E R Y
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          갤러리
        </h2>
      </AppearObserver>
      <AppearObserver>
        <div className="flex flex-wrap gap-2 w-[23rem] mx-auto justify-center items-center mt-10">
          {urlList1.map((url) => {
            return (
              <div
                key={url}
                className="w-[4.9rem] h-[4.9rem] cursor-pointer overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover" src={url} alt="" />
              </div>
            );
          })}
        </div>
      </AppearObserver>
      <AppearObserver>
        <div className="flex flex-wrap gap-2 w-[23rem] mx-auto justify-center items-center mt-2">
          {urlList2.map((url) => {
            return (
              <div
                key={url}
                className="w-[4.9rem] h-[4.9rem] cursor-pointer overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover" src={url} alt="" />
              </div>
            );
          })}
        </div>
      </AppearObserver>
    </Section>
  );
};
