import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const [passwordConf, setPasswordConf] = useState();
  const [company, setCompany] = useState();
  const [department, setDepartment] = useState();

  const [name_v, setName_v] = useState(false);
  const [email_v, setEmail_v] = useState(false);
  const [password_v, setPassword_v] = useState(false);
  const [passwordConf_v, setPasswordConf_v] = useState(false);
  const [dup_v, setDup_v] = useState(false);

  const [emailMessage, setEmailMessage] = useState(" ");
  const [nameMessage, setNameMessage] = useState(" ");
  const [passwordMessage, setPasswordMessage] = useState(" ");
  const [dupMessage, setDupMessage] = useState(" ");

  const handleChangeName = async (e) => {
    await setName(e.target.value);
    if (e.target.value.length < 2) {
      await setNameMessage("2자 이상 입력해 주세요.");
      await setName_v(false);
    } else {
      await setName_v(true);
      await setNameMessage(" ");
    }
  };

  const handleChangeEmail = async (e) => {
    await setDup_v(false);
    await setEmail(e.target.value);
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    await setEmail_v(regExp.test(e.target.value));
    if (!email_v) {
      await setEmailMessage("유효한 이메일 형식이 아닙니다.");
    } else {
      await setEmailMessage(" ");
    }
  };

  const handleChangePassword = async (e) => {
    await setPassword(e.target.value);
  };

  const handleChangePasswordConf = async (e) => {
    await setPasswordConf(e.target.value);
    if (password_v) {
      if (password !== e.target.value) {
        await setPasswordConf_v(false);
        await setPasswordMessage("일치하지 않습니다.");
      } else {
        await setPasswordConf_v(true);
        await setPasswordMessage(" ");
      }
    }
  };

  useEffect(() => {
    var regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    setPassword_v(regExp.test(password));

    if (password === null || password === "") {
      return;
    }
    else {
      if (!password_v) {
        setPasswordMessage("유효한 비밀번호 형식이 아닙니다.");
      } else {
        setPasswordMessage(" ");
      }
    }
  }, [password, password_v]);

  useEffect(() => {
    if(dup_v){
      setEmailMessage(" ");
      setDupMessage("사용할 수 있는 이메일 입니다.");
    }
    else {
      setDupMessage(" ");
    }
  }, [dup_v])

  const handleChangeCompany = async (e) => {
    await setCompany(e.target.value);
  };

  const handleChangeDepartment = async (e) => {
    await setDepartment(e.target.value);
  };

  //submit 함수 작성 필요
  const onSubmit = () => {
    if(passwordConf_v && name_v && password_v && email_v){
      alert('회원 가입이 완료되었습니다.');
    }
    else {
      if(!name_v) alert('이름을 입력해 주세요.')
      else if(!email_v){
        alert('유효한 이메일을 입력해주세요.')
      }
      else if(!dup_v){
        alert('이메일 중복 확인이 필요합니다.')
      }
      else if(!password_v){
        alert('유효한 비밀번호를 입력해 주세요.')
      }
    }
  }

  const isEmailEx = () => {
    if(!email_v){
      alert('유효한 형식의 이메일을 먼저 입력해 주세요.');
    }
    else{
      setDup_v(true);
    }
  }

  return (
    <Layout>
      <section className="h-screen flex flex-col">
        <div className="bg-gray-300">
          <div className="h-max container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2 py-3">
            <a href="../signin" className="w-2/5 my-6">
              <img src="uptempo-log-wh.png" alt="Logo image" />
            </a>
            <div className="bg-white px-10 py-8 rounded shadow-lg text-black w-full">
              <h1 className="mb-10 text-3xl text-center font-bold">
                회원 가입
              </h1>
              <p className="font-bold"> • 이름 (*필수)</p>
              <input
                type="text"
                className="border border-gray-400 w-full p-3 rounded"
                name="사용자 명"
                placeholder="홍길동"
                onChange={(e) => {
                  e.preventDefault;
                  handleChangeName(e);
                }}
              />
              <p className="ml-2 mb-4 text-red-500 text-sm">{nameMessage}</p>
              <p className="font-bold"> • 이메일 (*필수)</p>
              <p className="ml-1 text-slate-900 text-sm">
                * 입력하신 주소로 인증메일이 발송됩니다. 사용 가능한 주소를
                입력해 주세요.
              </p>
              <div className="flex">
                <input
                  type="text"
                  className="border border-gray-400 w-2/3 p-3 rounded mr-3 flex-auto"
                  name="이메일"
                  placeholder="gildong.hong@kt.com"
                  onChange={(e) => {
                    e.preventDefault;
                    handleChangeEmail(e);
                  }}
                />
                <button
                  className="border py-3 px-1 rounded-lg bg-slate-700 text-white shadow-sm transition ease-in-out hover:bg-slate-100 hover:text-gray-900 flex-auto"
                  onClick={() => {
                    isEmailEx();
                  }}
                >
                  중복 확인
                </button>
              </div>
              <div className="ml-2 mb-4 ">
                <p className="text-red-500 text-sm">{emailMessage}</p>
                <p className="text-sm text-green-600">{dupMessage}</p>
              </div>
              <p className="font-bold"> • 비밀번호 (*필수)</p>
              <input
                type="password"
                className="border border-gray-400 w-full p-3 rounded mb-1"
                name="비밀번호"
                placeholder="영문, 숫자, 특수문자 포함 8~20자리"
                onChange={(e) => {
                  e.preventDefault;
                  handleChangePassword(e);
                }}
              />
              <input
                type="password"
                className="border border-gray-400 w-full p-3 rounded"
                name="비밀번호 확인"
                placeholder="비밀번호 확인"
                onChange={(e) => {
                  e.preventDefault;
                  handleChangePasswordConf(e);
                }}
              />
              <p className="ml-2 mb-4 text-red-500 text-sm mb-4">
                {passwordMessage}
              </p>

              <p className="font-bold"> • 회사명</p>
              <input
                type="text"
                className="border border-gray-400 w-full p-3 rounded mb-3"
                name="회사명"
                placeholder="kt ds"
                onChange={(e) => {
                  e.preventDefault;
                  handleChangeCompany(e);
                }}
              />

              <p className="font-bold"> • 부서명</p>
              <input
                type="text"
                className="border border-gray-400 w-full p-3 rounded mb-3"
                name="부서 명"
                placeholder="플랫폼품질혁신TF"
                onChange={(e) => {
                  e.preventDefault;
                  handleChangeDepartment(e);
                }}
              />

              <button
                type="submit"
                className="w-full text-center mt-5 py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 my-1 font-bold transition ease-in-out shadow-md"
                onClick={() => {
                  onSubmit();
                }}
              >
                계정 생성
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                <div className="font-bold"></div>
                <div className="my-1">
                  <a className="text-gray-500 mx-1" href="#">
                    서비스 약관
                  </a>{" "}
                  <a className="text-gray-500 mx-1" href="#">
                    계정 보호 정책
                  </a>
                </div>
              </div>
            </div>

            <div className="text-grey-dark my-6 text-lg">
              이미 계정이 있으신가요?
              <a className="text-blue-700 mx-2 font-bold" href="../signin">
                로그인
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}