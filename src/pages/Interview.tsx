import { useState } from 'react';
import { Hana } from '../components/Hana';
import { QnAItem } from '../components/QnAItem';
import { Section } from '../components/Section';
import { AnswerModal } from '../components/AnswerModal';

export const Interview = () => {
  const [modalIndex, setModalIndex] = useState(0);

  const closeModal = () => {
    setModalIndex(0);
    document.body.style.overflow = 'auto';
  };
  return (
    <Section>
      <div className="bg-white w-full relative">
        <Hana />
        <h2 className="italic text-3xl sm:text-4xl mt-1 sm:mt-2.5 text-center">
          INTERVIEW
        </h2>
        <QnAItem
          title="어떻게 만나게 되었나요?"
          left="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KakaoTalk_20240627_224543615_01.jpg?alt=media&token=99d2e8f5-88f2-4b49-bcc9-fdbf4b445ad3"
          right="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KakaoTalk_20240627_224543615.jpg?alt=media&token=70813d66-e9fc-43bc-9e2b-b69fd1c5df0e"
          guide={true}
          leftFunction={() => setModalIndex(1)}
          rightFunction={() => setModalIndex(2)}
        />

        <QnAItem
          title="결혼을 결심한 이유는 무엇인가요?"
          left="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/b-2.jpg?alt=media&token=8f472f27-75bf-416a-88af-9ca4808a540f"
          right="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/b-1.jpg?alt=media&token=bfba187b-555b-4634-8d19-c78139180fbe"
          leftFunction={() => setModalIndex(3)}
          rightFunction={() => setModalIndex(4)}
          theme="emerald"
        />

        <QnAItem
          title="결혼을 앞둔 소감과 각오 한 마디!"
          left="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9729.jpg?alt=media&token=f9f6c6cf-2978-47f7-b3e3-31f71af61894"
          right="https://firebasestorage.googleapis.com/v0/b/wedding-invitation-916e2.appspot.com/o/KMS_9738.jpg?alt=media&token=06e46b95-a0a0-48dc-b4fc-7806170683ed"
          leftFunction={() => setModalIndex(5)}
          rightFunction={() => setModalIndex(6)}
          theme="sky"
        />
      </div>
      <AnswerModal modalIndex={modalIndex} close={closeModal} />
    </Section>
  );
};
