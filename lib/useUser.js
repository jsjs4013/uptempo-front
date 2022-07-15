import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

import { useRouter } from 'next/router';
import fetchJson from "./fetchJson";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const router = useRouter();

  const { data: user, mutate: mutateUser } = useSWR(["/api/user"], fetchJson);

  useEffect(() => {
    // console.log('re: ' + redirectTo);
    // console.log('dir: ' + redirectIfFound);
    // console.log('user: ' + user?.isLoggedIn);
    if (!redirectTo || !user){
      // console.log('Here');
      return;
    }

    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
      router.push(redirectTo);
    }
  }, [user, redirectTo, redirectIfFound]);

  return { user, mutateUser };
}