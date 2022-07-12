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
                  await fetchJson('api/login', {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
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
