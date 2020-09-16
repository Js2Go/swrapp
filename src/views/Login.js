import React, { useState } from 'react'
import { Button, WingBlank, InputItem, WhiteSpace } from 'antd-mobile'

import { useCaptcha } from '@/apihooks/login'
import Header from '@components/Header'
import styled from 'styled-components'

const CaptchaWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Register = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [captcha, setCaptcha] = useState('')
  const { data, error, revalidate } = useCaptcha()

  const userNameChange = e => {
    setUserName(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  const rePasswordChange = e => {
    setRePassword(e.target.value)
  }

  const captchaChange = e => {
    setCaptcha(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <WingBlank>
        <InputItem
          placeholder="请输入用户名"
          value={username}
          onInput={userNameChange}
        >用户名</InputItem>
        <WhiteSpace />
        <InputItem
          type="password"
          placeholder="请输入密码"
          value={password}
          onInput={passwordChange}
        >密码</InputItem>
        <WhiteSpace />
        <InputItem
          type="password"
          placeholder="请输入确认密码"
          value={rePassword}
          onInput={rePasswordChange}
        >确认密码</InputItem>
        <WhiteSpace />
        <CaptchaWrapper>
          <InputItem
            placeholder="请输入验证码"
            value={captcha}
            onInput={captchaChange}
          >验证码</InputItem>
          { !error && data && <img src={data} alt="code" onClick={revalidate} /> }
        </CaptchaWrapper>
        <WhiteSpace />
        <Button type="primary">注册 / 登录</Button>
      </WingBlank>
    </div>
  )
}

export default Register
