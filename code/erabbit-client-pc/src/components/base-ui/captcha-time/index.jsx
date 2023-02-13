import React, { memo, useEffect, useState, useRef } from "react";

const CaptchaTime = memo((props) => {
  const { handleSendCaptcha } = props;

  const [time, setTime] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current && clearInterval(timer.current);
    return () => timer.current && clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (time === 60) {
      // ?记住，setxxxxx内只能执行set操作不能执行其他操作
      timer.current = setInterval(() => setTime((time) => --time), 1000);
    } else if (time === 0) {
      timer.current && clearInterval(timer.current);
    }
  }, [time]);

  function getCode() {
    handleSendCaptcha()
    setTime(60);
  }

  return (
    <span
      onClick={() => getCode()}
      style={{
        position: "absolute",
        zIndex: 96,
        top: "1px",
        right: 0,
        bottom: "1px",
        left: "200px",
        lineHeight: "34px",

        color: "rgb(102, 102, 102)",
        textAlign: "center",

        cursor: "pointer",
        backgroundColor: "rgb(245, 245, 245)",
      }}
    >
      {time ? `${time}秒后重新获取` : "获取验证码"}
    </span>
  );
});

export default CaptchaTime;
