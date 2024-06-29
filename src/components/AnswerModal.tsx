const ModalContent = (number: number) => {
  if (number === 1) {
    return (
      <>
        <div>- 형철 -</div>
        <div>교회 청년부에서 리더로</div>
        <div>같이 사역하면서 만났어요.</div>
        <div>대표 리더였던 봄이가 교회 사역에</div>
        <div>자주 콜링 해주어서</div>
        <div>함께하는 시간이 많아졌죠.</div>
        <div>그리고 주말에 만나서 같이 밥도 먹고</div>
        <div>공부도 하고 이야기도 하면서</div>
        <div>봄이에 대해서 더 알게 되었어요.</div>
        <div>알게 되면 알게 될수록 마음에 들어서</div>
        <div> 결혼하고 싶어졌답니다. </div>
        <div>참 감사하죠!</div>
      </>
    );
  }
  if (number === 2) {
    return (
      <>
        <div>- 새봄 -</div>
        <div>교회 청년부에서 리더로</div>
        <div>같이 사역하면서 만났어요.</div>
        <div>제가 신랑에게 첫눈에 반해서</div>
        <div>조용히 지켜보다가</div>
        <div>매주 토요일마다</div>
        <div> 같이 공부하자고 꼬셨답니다.</div>
        <div>신랑은 처음에는 정말 공부하자는 줄 알고</div>
        <div>열심히 노트북과 책을 챙겨왔어요.</div>
        <div>결국 공부는 안 하고(ㅎㅎ)</div>
        <div>함께 이야기 나누고 산책하고</div>
        <div>밥도 먹으며 가까워졌죠.</div>
        <div>신기한 건 제가 신랑과 친해지기도 전에</div>
        <div>신랑과 함께 혼인신고서를 쓰는</div>
        <div>꿈을 꾸었어요.</div>
        <div>그리고 그 꿈을 꾼 지 2년 만에</div>
        <div>저희는 정말 결혼하게 되었답니다.</div>
        <div>너무 신기하죠!</div>
      </>
    );
  }
  if (number === 3) {
    return (
      <>
        <div>- 새봄 -</div>
        <div>처음 봤을 때부터 신기하게도</div>
        <div>온전히 신뢰할 수 있는 사람이었어요.</div>
        <div>겸손하고 진실되고</div>
        <div>성실하고 멋진 모습을 보며</div>
        <div>'이 사람이랑 함께하면 정말 행복하겠다'</div>
        <div>라고 확신했답니다.</div>
        <div>저에게 허락하신 배필을</div>
        <div>한눈에 알아본 것 같아요😊</div>
      </>
    );
  }
  if (number === 4) {
    return (
      <>
        <div>- 형철 -</div>
        <div>가장 큰 이유는</div>
        <div>하나님의 인도하심 안에서 만났기 때문에</div>
        <div>결혼을 결심할 수 있었습니다.</div>
        <div>그리고 봄이랑 서로</div>
        <div>이야기가 잘 통하고</div>
        <div>함께하는 시간이 즐겁고 재미있어서</div>
        <div>평생 함께하면 좋겠다고 생각하여</div>
        <div>결혼을 결심하게 되었습니다.</div>
      </>
    );
  }
  if (number === 5) {
    return (
      <>
        <div>- 형철 -</div>
        <div>사랑스럽고 지혜로운 봄이와</div>
        <div>한 가족이 되어 평생 함께 나아갈 것을</div>
        <div>약속하는 순간이기에</div>
        <div>조금은 긴장되고 떨리지만</div>
        <div>기쁘고 감사한 마음이 더 큽니다.</div>
        <div>서로의 연약한 부분을 감싸주고</div>
        <div>부족한 부분을 채워주며</div>
        <div>사랑으로 아끼며</div>
        <div>행복하게 살아봅시다!</div>
      </>
    );
  }
  if (number === 6) {
    return (
      <>
        <div>- 새봄 -</div>
        <div>세상에서 제일 든든하고 멋진 사람과</div>
        <div>평생을 함께한다니,</div>
        <div>살면서 받은 가장 큰 축복을</div>
        <div>늘 기억하면서</div>
        <div>어떤 상황에서도 감사하며</div>
        <div>기쁘게 살고 싶어요.</div>
        <div>사랑하는 남편!</div>
        <div>우리 할머니, 할아버지가 되어도</div>
        <div>건강하게 손잡고 산책하고</div>
        <div>도란도란 이야기 나누며</div>
        <div>행복하게 삽시다.</div>
      </>
    );
  }
};

export const AnswerModal = ({
  modalIndex,
  close,
}: {
  modalIndex: number;
  close: () => void;
}) => {
  if (!modalIndex) {
    return <></>;
  }
  document.body.style.overflow = 'hidden';
  return (
    <div className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 h-screen w-full overflow-hidden">
      <div className="bg-appear w-[100vw] h-full bg-slate-700"></div>
      <div className="absolute h-fit w-[90%] flex flex-col items-end">
        <div className="page-card rounded-lg w-full opacity-1 bg-white opacity-90 mb-4 p-4">
          <div className="text-center flex flex-col gap-0.5">
            {ModalContent(modalIndex)}
          </div>
        </div>
        <button
          onClick={close}
          className="close-button text-center bg-blue-600 opacity-80 text-white py-2 px-4 rounded">
          닫기
        </button>
      </div>
    </div>
  );
};
