import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMe } from "../services/auth.service";

function useInitialize() {
  const { user, isRefreshToken } = useSelector((store) => store.auth);

  useEffect(() => {
    if (isRefreshToken && !user) {
      async function start() {
        try {
          const meResponse = await getMe();

          if (!meResponse?.user) {
            return;
          }

          dispatch(setUser(meResponse.user));
        } catch (err) {
          console.error("Authentication initialization failed:", error);
        }
      }
      start();
    }
  }, []);
}
