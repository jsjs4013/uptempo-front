import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";
import axios from "axios";
import axiosJson from "../lib/axiosJson";

import { useEffect } from "react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

// useEffect(() => async() => {
//   // Try redrict to regist jwt token
//   try {
//     const redirectToken = await axios('http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1ODEzNDE5NDYxMn0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYSJ9.WAeoaKIYD8JgvEASsHe3EFB54NCe01KJH9O3J9oc3EA', { withCredentials: true });
//     console.log(redirectToken);
//   } catch (error) {
//     console.log(error.message);
//   }
//   //////////////////////////////////
// }, []);
  
  return (
    <Layout>
      <Form onSubmit={async (event) => {
              event.preventDefault();

              const body = {
                name: event.target.name.value,
                email: event.target.email.value,
              }

              try {
                const resultLogin = await fetchJson('/api/login', {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                  },
                  body: JSON.stringify(body),
                });
                console.log('dasklhdsakl');
                console.log(resultLogin);

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