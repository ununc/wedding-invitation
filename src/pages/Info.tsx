import { Hana } from '../components/Hana';
import { Section } from '../components/Section';

export const Info = () => {
  return (
    <Section>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        축하 메세지 comments 다는 곳
      </div>
      <div className="mt-8 border border-green-700 h-48 w-[85%]">
        마음 전하실 곳 ex) '신락측 계좌' 클릭 시 혼주 계좌 포함 모달
      </div>
      <div className="mt-8 border border-green-700 h-32 w-full">
        행복하게 잘 살겠습니다.
      </div>
    </Section>
  );
};
