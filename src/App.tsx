import { useEffect, useState } from 'react';
import './App.css';
import { Intro } from './pages/Intro';
import { Invitation } from './pages/Invitation';
import { Interview } from './pages/Interview';
import { Gallery } from './pages/Gallery';
import { Location } from './pages/Location';
import { Info } from './pages/Info';
import { AnswerModal } from './components/AnswerModal';
import { Section } from './components/Section';
import { database } from './firebase/firebase';
import { AppearObserver } from './components/AppearObserver';
import { Flower } from './components/Flower';
import { Calendar } from './pages/Calendar';
import { EmblaCarousel } from './components/EmblaCarousel';

function App() {
  const [init, setInit] = useState(true);
  const [modalIndex, setModalIndex] = useState(0);
  const [appear, setAppear] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(100);

  const selectGalleryIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setModalIndex(0);
    document.body.style.overflow = 'auto';
  };

  const appearCopy = () => {
    if (!appear) {
      setAppear(true);
      setTimeout(() => {
        setAppear(false);
      }, 3000);
    }
  };

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const [commentList, setCommentList] = useState<IComment[]>([]);
  const [createModal, setCreateModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<IComment | null>(null);

  const handleCreateModal = () => {
    setCreateModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = (event?: React.MouseEvent<HTMLDivElement>) => {
    if (!(event?.target as HTMLDivElement)?.classList?.contains('backdrop'))
      return;
    closeCommentModal();
  };

  const closeCommentModal = () => {
    setCreateModal(false);
    setName('');
    setPass('');
    setMessage('');
    document.body.style.overflow = 'auto';
  };

  const handleDelete = (id: string) => {
    const target = commentList.find((comment) => comment.id === id);
    if (!target) return;
    setDeleteTarget(target);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDeleteModal = (event?: React.MouseEvent<HTMLDivElement>) => {
    if (!(event?.target as HTMLDivElement)?.classList?.contains('backdrop'))
      return;
    closeDeleteModal();
  };

  const closeDeleteModal = () => {
    setDeleteTarget(null);
    setPass('');
    document.body.style.overflow = 'auto';
  };

  const handleDeleteComment = () => {
    if (btoa(pass) === deleteTarget?.password) {
      database
        .ref(`comments/${deleteTarget?.id}`)
        .remove()
        .then(() => {
          closeDeleteModal();
          setCommentList((prev) =>
            prev.filter((item) => item.id !== deleteTarget.id),
          );
        });
      return;
    }
    alert('비밀번호가 맞지 않습니다.');
  };

  const loadComment = () => {
    database.ref('comments').once('value', function (data) {
      const commentObject = data.val();
      if (typeof commentObject !== 'object') return;
      const resultArray: IComment[] = [];
      for (const property in commentObject) {
        resultArray.push(commentObject[property]);
      }
      setCommentList(resultArray.reverse());
    });
  };

  const handleCreateComment = () => {
    if (!name) {
      alert('이름을 입력하세요.');
      return;
    }
    if (!pass) {
      alert('비밀번호를 입력하세요.');
      return;
    }
    if (!message) {
      alert('메세지를 입력하세요.');
      return;
    }
    const createdAt = new Date().getTime();
    const password = btoa(pass);
    const id = createdAt + name + password;
    const item = {
      id,
      name,
      password,
      message,
    };
    database
      .ref(`comments/${id}`)
      .set(item)
      .then(() => {
        setCommentList((prev) => [item, ...prev]);
        closeCommentModal();
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setInit(false);
    }, 1500);
    loadComment();
  }, []);
  return (
    <div className={init ? 'h-screen overflow-y-hidden relative' : ''}>
      <Intro />
      <Invitation />
      <Interview setModalIndex={setModalIndex} />
      <Gallery setIndex={selectGalleryIndex} />
      <AnswerModal modalIndex={modalIndex} close={closeModal} />
      <Section>
        <AppearObserver>
          <div className="w-full mt-20 mb-1.5 opacity-[0.55]">
            <Flower />
          </div>
        </AppearObserver>
        <AppearObserver>
          <h2 className="text-[0.625rem] text-amber-950 tracking-tighter opacity-40 text-center">
            G U E S T &nbsp; B O O K
          </h2>
          <h2 className="text-sm mt-1 text-amber-950 opacity-[0.45] text-center">
            축하 인사
          </h2>
        </AppearObserver>
        <AppearObserver>
          <div className="w-full h-fit flex justify-center px-6 items-center overflow-hidden">
            <div className="w-11/12 h-96 overflow-y-scroll mt-8 px-3 flex flex-col gap-4">
              {commentList.map(({ name, message, id }) => {
                return (
                  <div
                    key={id}
                    className="bg-white shadow-md rounded-lg p-4 text-amber-950/60 border border-amber-950/30 border-dashed">
                    <div className="relative flex gap-5 justify-between items-center">
                      <div className="w-40 truncate mt-0.5">From. {name}</div>
                      <button
                        className=" absolute top-1 right-0"
                        onClick={() => handleDelete(id)}>
                        <div className="x-icon"></div>
                      </button>
                    </div>
                    <div className="break-words text-center text-sm mt-3 p-0.5">
                      {message}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AppearObserver>
        <AppearObserver>
          <div className="w-full flex justify-center items-center mt-9">
            <button
              onClick={handleCreateModal}
              className="relative w-72 cursor-pointer">
              <div className="w-full text-center h-9 rounded-lg"></div>
              <div className="absolute absolute-center text-sm text-amber-950/80 py-1.5 px-2 cursor-pointer rounded-lg border-amber-950/80 border border-dashed opacity-60 text-center">
                축하 인사 전하기
              </div>
            </button>
          </div>
        </AppearObserver>
      </Section>
      <Calendar />
      <Location setAppear={appearCopy} />
      <Info setAppear={appearCopy} />
      {selectedIndex !== 100 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center backdrop bg-black/80">
          <div className="w-11/12 mb-1.5 text-sm flex justify-end text-neutral-100/90">
            <button
              onClick={() => setSelectedIndex(100)}
              className="shrink-0 px-2">
              닫기
            </button>
          </div>
          <div className="w-11/12 h-[90%]  rounded-lg overflow-hidden">
            <EmblaCarousel index={selectedIndex} />
          </div>
        </div>
      )}
      {createModal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 backdrop"
          onClick={handleCloseModal}>
          <div className="absolute absolute-center text-15 text-neutral-700 rounded-lg bg-white p-6 shadow-lg flex flex-col justify-center items-center mt-1 w-11/12 mx-auto">
            <textarea
              className="w-full mt-1.5 h-52 rounded-lg p-4 border border-neutral-300 focus:border-amber-900/40 opacity-80 resize-none"
              placeholder="내용"
              onInput={handleMessage}
              value={message}
            />
            <div className="flex mt-5 gap-3">
              <input
                type="text"
                className="flex-shrink w-1/2 rounded-lg border border-neutral-300 p-2 opacity-80 focus:border-amber-900/40"
                placeholder="이름"
                onInput={handleName}
                value={name}
              />
              <input
                type="password"
                className="flex-shrink w-1/2 rounded-lg border border-neutral-300 p-2 opacity-80 focus:border-amber-900/40"
                placeholder="비밀번호"
                onInput={handlePass}
                value={pass}
              />
            </div>
            <button
              className="mt-8 mb-2 text-amber-950/80 opacity-70  border rounded-lg  border-amber-950 border-dashed py-1.5 px-3 cursor-pointer"
              onClick={handleCreateComment}>
              글 남기기
            </button>
          </div>
        </div>
      )}
      {deleteTarget && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 backdrop"
          onClick={handleCloseDeleteModal}>
          <div className="absolute absolute-center text-15 text-neutral-700 rounded-lg bg-white p-6 shadow-lg flex flex-col justify-center items-center mt-1 w-11/12 mx-auto">
            <div className="flex mt-5 gap-3">
              <input
                type="password"
                className="flex-shrink w-full rounded-lg border border-amber-900 p-2 opacity-80"
                placeholder="비밀번호"
                onInput={handlePass}
                value={pass}
              />
            </div>
            <button
              className="mt-6 text-amber-950/80 opacity-70  border rounded-lg border-amber-950 border-dashed py-1.5 px-3 cursor-pointer"
              onClick={handleDeleteComment}>
              글 지우기
            </button>
          </div>
        </div>
      )}
      <div
        className={
          'copy bg-slate-800 text-sm text-slate-100 pt-2 px-3 rounded-lg ' +
          (appear ? 'appear-copy' : 'hidden')
        }>
        복사되었습니다
      </div>
    </div>
  );
}

export default App;

interface IComment {
  id: string;
  name: string;
  password: string;
  message: string;
}
