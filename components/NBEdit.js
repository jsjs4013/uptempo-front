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
    //ui에서 동작하도록 바꿔야...
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
    <div className="grid w-full shadow-2xl p-2 rounded-lg">
        <button
          className="w-24 py-2 px-2 border-2 font-bold rounded-md shadow-sm hover:bg-gray-700 hover:text-white hover:shadow-lg focus:bg-gray-500 focus:shadow-sm active:bg-gray-500 active:shadow-sm transition duration-150 ease-in-out mt-2 mb-4"
          onClick={props.clickListButton}
        >
          ←  목록으로
        </button>
        <div className="pt-4 font-bold pl-5 text-2xl">글 작성하기</div>
      <div className="border-b-2 mx-5 my-2 py-2 border-gray-700 px-4">
        <div className="grid grid-cols-10 gap-8 py-2">
          <input
            className="col-span-7 p-2.5 border-b-2 border-gray-500 my-1 active:border-gray-700 focus:border-gray-700"
            placeholder="제목을 입력하세요 (50자 이내)"
            maxLength={50}
            onChange={(e) => {
              e.preventDefault;
              handleChangeSubject(e);
            }}
          ></input>
          <input
            className="col-span-3 p-2.5 border-b-2 border-gray-500 my-1"
            placeholder="작성자"
            maxLength={20}
            onChange={(e) => {
              e.preventDefault;
              handleChangeWriter(e);
            }}
          ></input>
        </div>
        <textarea
          className="p-2.5 w-full h-96 my-2 resize-none"
          placeholder="내용을 입력하세요."
          wrap="hard"
          onChange={(e) => {
            e.preventDefault;
            handleChangeContent(e);
          }}
        ></textarea>
      </div>
      <div className="justify-self-end py-4">
        <input
          className="border-2 rounded-md py-2 pl-3 border-gray-500"
          placeholder="글 비밀번호 (8자 이내)"
          maxLength={8}
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
        {/* <button
          className="px-6 py-2.5 border-2 font-medium rounded-md shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg focus:bg-red-600 focus:shadow-lg active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out ml-1"
          onClick={cleanAll}
        >
          초기화
        </button> */}
      </div>
    </div>
  );
}
