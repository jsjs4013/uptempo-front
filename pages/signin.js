import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";

export default function Signin() {
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const fetchapiLogin = async (body) => {
    return await fetchJson('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
      },
      body: JSON.stringify(body),
    })
  };
  
  return (
    <Layout>
      <Form onSubmit={async (event) => {
              event.preventDefault();

                <div className="flex justify-between items-center mb-6">
                <div>
                    <a
                      href="../signup"
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
                
              try {
                mutateUser(
                  await fetchJson('/api/login', {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                      withCredentials: true,
                    },
                    body: JSON.stringify(body),
                  })
                )
              } catch (error) {
                  console.log(error.message);
              }
            }}
        />
    </Layout>
  );
}