import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser(redirectTo = "", redirectIfFound = false) {
  const swrHeader = {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({Authorization : "Bearer 9dde262376db4bf3b09826c6bf2d0535cbc8d55dfbeb4e428db99205f1b1d87b"})
  };
  const { data: user, mutate: mutateUser } = useSWR(["/api/getxsrftoken", swrHeader]);

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
