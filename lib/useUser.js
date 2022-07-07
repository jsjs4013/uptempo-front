import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR(["/api/user"]);

  useEffect(() => {
    console.log('re: ' + redirectTo);
    console.log('dir: ' + redirectIfFound);
    console.log('user: ' + user?.isLoggedIn);
    if (!redirectTo || !user) return;

    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
      Router.push(redirectTo);
    }
  }, [user, redirectTo]);

  return { user, mutateUser };
}