import { ClickMe } from '../components/ClickMe';
import { Hana } from '../components/Hana';
import { Section } from '../components/Section';

export const Interview = () => {
  return (
    <Section>
      <div className="bg-white w-full relative">
        <Hana />
        <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
          INTERVIEW
        </h2>
        <div className="h-8"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit text-lg">
            🩷 어떻게 처음 만나게 되었나요? 🩷
            <div className="h-1 mt-1 mx-8 opacity-30 rounded-2xl bg-pink-200"></div>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <div className="card-back  w-40 h-44 rounded-2xl border-b border-rose-300 shadow-md shadow-rose-200">
              <div className="mx-4 my-5 h-[8.5rem]">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9729.jpg?alt=media&token=f9f6c6cf-2978-47f7-b3e3-31f71af61894"
                  alt="형철"
                />
              </div>
              <ClickMe />
            </div>
            <div className="card-back  w-40 h-44 rounded-2xl border-b border-rose-300 shadow-md shadow-rose-200">
              <div className="mx-4 my-5 h-[8.5rem]">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9738.jpg?alt=media&token=06e46b95-a0a0-48dc-b4fc-7806170683ed"
                  alt="형철"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-container mt-5">
          <div className="text-center text-lg">
            💛 결혼을 결심한 이유는 무엇인가요? 💛
          </div>
          <div className="flex justify-between">
            <div className="w-full">새봄</div>
            <div className="w-full">형철</div>
          </div>
        </div>

        <div className="card-container mt-5">
          <div className="text-center text-lg">
            🩵 결혼을 앞둔 소감과 각오 한 마디! 🩵
          </div>
          <div className="flex justify-between">
            <div className="w-full">새봄</div>
            <div className="w-full">형철</div>
          </div>
        </div>
      </div>
    </Section>
  );
};
