import {
  useEffect,
  useRef
} from "react";

export function useInterval(callback, timeout = 1000) {
  const latestCallback = useRef(() => {});

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    const timer = setInterval(() => latestCallback.current(), timeout);
    return () => clearInterval(timer);
  }, []);
}

// 使用
useInterval(() => {
  setCount(count + 1);
  console.log(`count=${count}`);
  console.log('定时器返回timer', timer);
  if (count > 5) clearInterval(timer);
}, 1500);