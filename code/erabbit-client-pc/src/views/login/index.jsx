import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  DoubleRightOutlined,
  CopyrightOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  LogWithAccount,
  getLoginCaptcha,
  // logWithPhoneCate,
  // verifyLoginCaptcha,
} from "@/api/modules/log";
import {
  changeIsLoginAction,
  changeUserInfoAction,
} from "@/store/modules/main";

import CaptchaTime from "@/components/base-ui/captcha-time";
import { AppLoginWrapper } from "./style";

const AppLogin = memo(() => {
  // state状态
  const [currentLogWay, setCurrentLogWay] = useState("账户登录");
  const [accountValue, setAccountValue] = useState("xiaotuxian001");
  const [passwordValue, setPasswordValue] = useState(123456);
  const [phoneValue, setPhoneValue] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // ?切换登录方式
  function toggleLogWay(way) {
    setCurrentLogWay(way);
  }

  // todo 发送验证码
  const handleSendCaptcha = useCallback(() => {
    if (!isChecked) return;

    if (
      Number.isNaN(Number(phoneValue)) ||
      phoneValue === "" ||
      phoneValue.length !== 11
    ) {
      return false;
    } else {
      getLoginCaptcha(phoneValue).then((res) => {
        if (res.code === 200) {
          console.log("验证码发送成功!");
        }
      });
      return true;
    }
  }, [isChecked, phoneValue]);

  // ?点击登录
  const dispatch = useDispatch();
  function handleLoginClick() {
    if (!isChecked) return;

    if (currentLogWay === "账户登录") {
      if (
        accountValue === "" ||
        accountValue.length >= 20 ||
        String(passwordValue).length < 4
      ) {
        return false;
      } else {
        LogWithAccount(accountValue, passwordValue).then((res) => {
          if (res.code == 1) {
            dispatch(changeIsLoginAction(true));
            dispatch(changeUserInfoAction(res?.result));
            localStorage.setItem("token", res?.result?.token);
            localStorage.setItem("userInfo", JSON.stringify(res?.result));
            navigate("/home");
          } else {
            console.log("登录失败");
          }
        });
      }
    } else {
      if (
        Number.isNaN(Number(phoneValue)) ||
        phoneValue === "" ||
        phoneValue.length !== 11 ||
        Number.isNaN(Number(captchaValue)) ||
        captchaValue.length !== 4
      ) {
        return;
      } else {
        // ?登录请求暂时不能用
        // verifyLoginCaptcha(phoneValue, captchaValue).then((res) => {
        //   if (res.code === 200) {
        //     logWithPhoneCate(phoneValue, captchaValue).then(
        //       (res) => {
        //         // dispatch(changeIsLoginAction(true));
        //       },
        //       (err) => {
        //         console.log(err);
        //       }
        //     );
        //   }
        // });

        dispatch(changeIsLoginAction(true));
        dispatch(changeUserInfoAction({ name: "coderyliu" }));
        localStorage.setItem("token", "coderyliu_ly");
        navigate("/home");
      }
    }
  }

  // ?处理受控组件
  function handleFormItemChange(e, type) {
    switch (type) {
      case "account":
        setAccountValue(e.target.value);
        break;
      case "password":
        setPasswordValue(e.target.value);
        break;
      case "phone":
        setPhoneValue(e.target.value);
        break;
      case "captcha":
        setCaptchaValue(e.target.value);
        break;
      case "checkbox":
        setIsChecked(e.target.checked);
        break;
      default:
        break;
    }
  }

  // ?点击跳转至app首页
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/home");
  }

  return (
    <AppLoginWrapper>
      <div className="top-nav">
        <div className="nav-outer">
          <h1 className="logo">小兔鲜</h1>
          <p className="welcome">欢迎登录</p>
          <p className="navigate" onClick={() => navigateToHome()}>
            <span className="desc">进入网站首页</span> <DoubleRightOutlined />
          </p>
        </div>
        <div className="bg-cover">
          <div className="log-wrap">
            <ul className="top-cate">
              <li
                className={
                  currentLogWay === "账户登录" ? "login active" : "login"
                }
                onClick={() => toggleLogWay("账户登录")}
              >
                账户登录
              </li>
              <li
                className={
                  currentLogWay === "验证码登录" ? "login active" : "login"
                }
                onClick={() => toggleLogWay("验证码登录")}
              >
                验证码登录
              </li>
            </ul>
            <div className="content">
              <ul className="form-wrap">
                {currentLogWay === "账户登录" ? (
                  <li className="form-item">
                    <UserOutlined />
                    <input
                      type="text"
                      className="input-el"
                      placeholder="请输入用户名"
                      value={accountValue}
                      onChange={(e) => handleFormItemChange(e, "account")}
                    />
                  </li>
                ) : (
                  <li className="form-item">
                    <UserOutlined />
                    <input
                      type="text"
                      className="input-el"
                      placeholder="请输入手机号"
                      value={phoneValue}
                      onChange={(e) => handleFormItemChange(e, "phone")}
                    />
                  </li>
                )}
                {currentLogWay === "账户登录" ? (
                  <li className="form-item">
                    <LockOutlined />
                    <input
                      type="password"
                      className="input-el"
                      placeholder="请输入密码"
                      value={passwordValue}
                      onChange={(e) => handleFormItemChange(e, "password")}
                    />
                  </li>
                ) : (
                  <li className="form-item">
                    <LockOutlined />
                    <input
                      type="text"
                      className="input-el"
                      placeholder="请输入验证码"
                      value={captchaValue}
                      onChange={(e) => handleFormItemChange(e, "captcha")}
                    />
                    <CaptchaTime
                      handleSendCaptcha={handleSendCaptcha}
                    ></CaptchaTime>
                  </li>
                )}
                <li className="form-item">
                  <input
                    type="checkbox"
                    className="checked-el"
                    checked={isChecked}
                    onChange={(e) => handleFormItemChange(e, "checkbox")}
                  />
                  我已同意
                  <span className="secret">《隐私条款》</span>和
                  <span className="secret">《服务条款》</span>
                </li>
                <li className="form-item" onClick={() => handleLoginClick()}>
                  登录
                </li>
                <li className="form-item">
                  <span className="forget">忘记密码</span>
                  <span className="registry">免费注册</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="log-footer">
          <div className="foot-wrap">
            <ul className="bottom-explain-list">
              <li className="explain-item">关于我们</li>
              <li className="explain-item">帮助中心</li>
              <li className="explain-item">售后服务</li>
              <li className="explain-item">配送与验收</li>
              <li className="explain-item">商务合作</li>
              <li className="explain-item">搜索推荐</li>
              <li className="explain-item">友情链接</li>
            </ul>
            <p className="copy-right">
              CopyRight <CopyrightOutlined /> 小兔鲜
            </p>
          </div>
        </div>
      </div>
    </AppLoginWrapper>
  );
});

export default AppLogin;
