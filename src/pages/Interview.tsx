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

        <div>🩷 어떻게 처음 만나게 되었나요?</div>
        <div>💛 결혼을 결심하게 된 이유는 무엇인가요?</div>
        <div>🩵 결혼을 앞둔 소감과 각오 한 마디!</div>
      </div>
    </Section>
  );
};
