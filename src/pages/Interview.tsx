import { QnAItem } from '../components/QnAItem';
import { Section } from '../components/Section';
import { AppearObserver } from '../components/AppearObserver';

const qna = [
  {
    title: '어떻게 만나게 되었나요?',
    left: 'qna/one-two.jpg',
    right: 'qna/one-one.jpg',
    leftFunction: (fn: any) => fn(1),
    rightFunction: (fn: any) => fn(2),
  },
  {
    title: '결혼을 결심한 이유는 무엇인가요?',
    left: 'qna/two-two.jpg',
    right: 'qna/two-one.jpg',
    leftFunction: (fn: any) => fn(3),
    rightFunction: (fn: any) => fn(4),
  },
  {
    title: '앞으로 이렇게 함께하겠습니다 ෆ',
    left: 'qna/thr-one.jpg',
    right: 'qna/thr-two.jpg',
    leftFunction: (fn: any) => fn(5),
    rightFunction: (fn: any) => fn(6),
  },
];

export const Interview = ({
  setModalIndex,
}: {
  setModalIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Section>
      <AppearObserver>
        <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center mt-10">
          I N T E R V I E W
        </h2>
        <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
          소개합니다
        </h2>
      </AppearObserver>
      {qna.map(({ title, left, right, leftFunction, rightFunction }) => {
        return (
          <QnAItem
            key={title}
            title={title}
            left={left}
            right={right}
            leftFunction={() => leftFunction(setModalIndex)}
            rightFunction={() => rightFunction(setModalIndex)}
          />
        );
      })}
      <div className="h-10"></div>
    </Section>
  );
};
