import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOffline, setIsUserOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => setIsUserOffline(false));
    window.addEventListener("offline", () => setIsUserOffline(true));
  }, []);

  return isUserOffline;
};

export default useOnlineStatus;
