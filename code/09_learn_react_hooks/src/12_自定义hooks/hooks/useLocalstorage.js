import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    if (!localStorage.getItem(key)) return "";

    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
}

export default useLocalStorage;
