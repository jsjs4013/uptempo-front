import { useEffect, useState } from "react";

export default function NBEdit(props) {
  //summernote 도입 예정

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState(""); // 사용자 정보로 대체할 예정.
  const [password, setPassword] = useState("");

  const isVaildate = (value) => {
    if (value !== null && value !== undefined && value !== "") return true;
    return false;
  };

  const beforeSubmit = async () => {
    //ui적으로 바꿀 수도 있음.
    if (!isVaildate(subject)) {
      alert("글 제목을 입력해 주세요!");
      return false;
    } else if (!isVaildate(content)) {
      alert("내용을 입력해 주세요.");
      return false;
    } else if (!isVaildate(subject)) {
      alert("글 제목을 입력해 주세요!");
      return false;
    } else if (!isVaildate(content)) {
      alert("내용을 입력해 주세요.");
      return false;
    } else return true;
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const cleanAll = async () => {
    await setSubject("");
    await setContent("");
    await setWriter("");
    await setPassword("");
  };

  useEffect(() => {}, []);

  return (
    <div className="grid w-full shadow-2xl p-8 rounded-lg">
      <div className="flex">
        <div className="font-bold px-2 text-xl">글 작성하기</div>
        <button
          className="px-2 py-1 border-2 font-medium rounded-md shadow-sm hover:bg-gray-500 hover:text-white hover:shadow-lg focus:bg-gray-500 focus:shadow-sm active:bg-gray-500 active:shadow-sm transition duration-150 ease-in-out ml-1"
          onClick={props.clickListButton}
        >
          목록으로
        </button>
      </div>
      <div className="border-t-2 border-b-2 my-2 py-2 border-gray-200">
        <div className="grid grid-cols-10 gap-4 py-2">
          <input
            className="col-span-7 p-2.5 border-2 border-gray-500 rounded-lg my-1 active:border-gray-700 focus:border-gray-700"
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              e.preventDefault;
              handleChangeSubject(e);
            }}
          ></input>
          <input
            className="col-span-3 p-2.5 border-2 border-gray-500 rounded-lg my-1"
            placeholder="작성자"
            onChange={(e) => {
              e.preventDefault;
              handleChangeWriter(e);
            }}
          ></input>
        </div>
        <textarea
          className="p-2.5 w-full h-64 rounded-lg border-2 border-gray-500 h-80 my-2"
          placeholder="내용을 입력하세요."
          onChange={(e) => {
            e.preventDefault;
            handleChangeContent(e);
          }}
        ></textarea>
      </div>
      <div className="justify-self-end py-4">
        <input
          className="border-2 rounded-md py-2 pl-3 border-gray-500"
          placeholder="글 비밀번호"
          type={"password"}
          onChange={(e) => {
            e.preventDefault;
            handleChangePassword(e);
          }}
        ></input>
        <button
          className="px-8 py-2.5 border bg-[#2b3d51] rounded-md text-white font-medium shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:bg-slate-900 focus:shadow-lg active:bg-slate-900 active:shadow-lg transition duration-150 ease-in-out ml-1 mr-2"
          onClick={ async () => {
            if (await beforeSubmit) {
                console.log('reg');
                await props.registerArticle({
                subject: subject,
                content: content,
                writer: writer,
                password: password,
                type: 1,
              });
            }
          }}
        >
          등록
        </button>
        <button
          className="px-6 py-2.5 border-2 font-medium rounded-md shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg focus:bg-red-600 focus:shadow-lg active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out ml-1"
          onClick={cleanAll}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
