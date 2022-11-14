import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { message } from 'antd';

import { getLoginCaptFetch, loginFetch } from "@/services/modules/login";

import { LoginModalWrapper } from "./style";
import { changeTokenAction, changeUserInfoAction } from "@/store/modules/main";

const LoginModal = memo((props) => {
  const { closeClick } = props;
  // radio状态
  const [isChecked, setIsChecked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [cateNumber, setCateNumber] = useState();

  // redux
  const dispatch=useDispatch()

  // ?处理radio改变
  function handleRadioChange(e) {
    setIsChecked(e.target.checked);
  }

  // ?关闭登录框
  function handleCloseClick() {
    closeClick();
  }

  // ?处理login/registry
  function handleLoginClick(type) {
    if(!isChecked) return  message.warn('请先勾选隐私条款同意协议!')
    if(type==='login'){
      setIsLogin(true)
    }else{
      message.info('功能开发中')
    }
  }

  // ?处理手机号登录
  function handleNumberChange(e, type) {
    if (type === "phone") {
      setPhoneNumber(e.target.value);
    } else {
      setCateNumber(e.target.value);
    }
  }

  // ?获取短信验证码
  function getLoginCaptcha(){
    message.success('短信验证码发送成功，请注意查收!')
    getLoginCaptFetch(phoneNumber)
  }

  // ?登录
  function handlePhoneLogin(){
    loginFetch(phoneNumber,cateNumber).then(res=>{
      message.success('登录成功，欢迎您!')
      closeClick()

      // todo 保存token
      dispatch(changeTokenAction(res.token))
      localStorage.setItem('token',res.token)

      // todo 保存用户信息
      dispatch(changeUserInfoAction(res))
    })
  }

  // ?处理返回登录界面
  function backLoginPage(){
    setIsLogin(false)
  }

  let element;
  if (!isLogin) {
    element = (
      <div className="login-content">
        <div className="top">
          <span className="title">登录</span>
          <span className="close" onClick={() => handleCloseClick()}></span>
        </div>
        <div className="content">
          <div className="left">
            <div className="bg_cover"></div>
            <div className="login" onClick={() => handleLoginClick("login")}>
              手机号登录
            </div>
            <div
              className="registry"
              onClick={() => handleLoginClick("registry")}
            >
              注册
            </div>
          </div>
          <ul className="right">
            <li className="wx item">
              <span className="icon wx"></span>
              <span className="way">微信登录</span>
            </li>
            <li className="qq item">
              <span className="icon qq"></span>
              <span className="way">QQ登录</span>
            </li>
            <li className="wb item">
              <span className="icon wb"></span>
              <span className="way">微博登录</span>
            </li>
            <li className="wy item">
              <span className="icon wy"></span>
              <span className="way">网易邮箱登录</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <input
            type="radio"
            name="radio-el"
            className="radio-el"
            checked={isChecked}
            onChange={(e) => handleRadioChange(e)}
          />
          <span className="agree">同意</span>
          <span className="section">《服务条款》</span>
          <span className="section">《隐私政策》</span>
          <span className="section">《儿童隐私策略》</span>
        </div>
      </div>
    );
  } else {
    element = (
      <div className="login-content">
        <div className="top">
          <span className="title">手机号登录</span>
          <span className="close" onClick={() => handleCloseClick()}></span>
        </div>
        <div className="content-phone">
          <div className="phone-number">
            <input
              type="text"
              className="phone"
              placeholder="请输入手机号"
              value={phoneNumber}
              onChange={(e) => handleNumberChange(e, "phone")}
            />
          </div>
          <div className="cate-number">
            <input
              type="text"
              className="cate"
              placeholder="请输入短信验证码"
              value={cateNumber}
              onChange={(e) => handleNumberChange(e, "cate")}
            />
            <div className="btn" onClick={()=>getLoginCaptcha()}>获取短信验证码</div>
          </div>
          <div className="login-btn" onClick={()=>handlePhoneLogin()}>登录</div>
        </div>
        <div className="phone-bottom">
          <span className="other" onClick={()=>backLoginPage()}>&lt; 其他登录方式</span>
          <span className="account">&lt; 没有账号？免费注册</span>
        </div>
      </div>
    );
  }

  return (
    <LoginModalWrapper>
      {element}
      <div className="layer_cover"></div>
    </LoginModalWrapper>
  );
});

export default LoginModal;
