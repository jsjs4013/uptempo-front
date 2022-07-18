import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";
import axios from "axios";

import { useEffect } from "react";

export default function Signin() {
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

useEffect(() => async() => {
  // Try redrict to regist jwt token
  try {
    const redirectToken = await axios('http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1ODExOTgzODEyOX0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoic2FkIn0.NTHExodN99CmpUcVtwoFLzsef_mHPEHBgbfoaBpho_Q', {withCredentials: true});
    console.log(redirectToken);
  } catch (error) {
    console.log(error.message);
  }
  //////////////////////////////////
}, []);
  
  return (
    <Layout>
      <Form onSubmit={async (event) => {
              event.preventDefault();

              const body = {
                name: event.target.name.value,
                email: event.target.email.value,
              }

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