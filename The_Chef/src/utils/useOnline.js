import { useEffect, useState } from "react";

const useOnline = () => {

  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {

    //add event listener
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //remove the eventlistner after going to another page
    return()=>{
        window.removeEventListener('online',handleOnline);
        window.removeEventListener('offline',handleOffline);
    }

  }, []);




return isOnline;

};

export default useOnline;
