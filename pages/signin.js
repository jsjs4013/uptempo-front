import axios from "axios";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    name: "",
  });

  const option = {
    // 이름 데이터의 경우 중앙에서 관리할 필요가 있음.
  };

  const signIn = () => {
    if (email === "" || name === "") {
      window.alert("입력이 필요합니다.");
    }

    const url = "http://61.74.18.4/auth/api/v1/mock";
    axios
      .post(url, data)
      .then((res) => {
        console.log("succ");
      })
      .catch((err) => {
        console.log("err");
      })
      .then(() => {
        console.log("--");
      });
  };

  return (
    <Layout>
      <section className="h-screen bg-gray-300">
        <div className="container px-6 py-12 h-full">
          <p className="flex justify-center"></p>
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="grid place-items-center md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="KTDS_Logo.svg.png"
                className="w-1/5"
                alt="Phone image"
              />
              <img
                src="uptempo-log-wh.png"
                className="w-4/5"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form>
                {/** Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="E-mail"
                  />
                </div>

                {/** Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="비밀번호"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                <div>
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >
                      회원 가입
                    </a>
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out px-3"
                    >
                      비밀번호 찾기
                    </a>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label className="form-check-label inline-block text-gray-800">
                      자동 로그인
                    </label>
                  </div>
                </div>

                {/**  Submit button */}
                <button
                  className="inline-block px-7 py-3 bg-[#2b3d51] font-bold text-lg text-white leading-snug rounded shadow-md hover:bg-white hover:text-[#2b3d51] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={signIn}
                >
                  로그인
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
