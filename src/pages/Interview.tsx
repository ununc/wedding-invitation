import { QnAItem } from '../components/QnAItem';
import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';

export const Interview = ({
  setModalIndex,
}: {
  setModalIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-4">
          I N T E R V I E W
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          소개합니다
        </h2>
      </AppearObserver>
      <QnAItem
        title="어떻게 만나게 되었나요?"
        left="qna/one-one.jpg"
        right="qna/one-two.jpg"
        leftFunction={() => setModalIndex(1)}
        rightFunction={() => setModalIndex(2)}
      />

      <QnAItem
        title="결혼을 결심한 이유는 무엇인가요?"
        left="qna/two-one.jpg"
        right="qna/two-two.jpg"
        leftFunction={() => setModalIndex(3)}
        rightFunction={() => setModalIndex(4)}
      />

      <QnAItem
        title="결혼을 앞둔 소감과 각오 한 마디!"
        left="qna/thr-one.jpg"
        right="qna/thr-two.jpg"
        leftFunction={() => setModalIndex(5)}
        rightFunction={() => setModalIndex(6)}
      />
      <div className="h-10"></div>
    </Section>
  );
};
