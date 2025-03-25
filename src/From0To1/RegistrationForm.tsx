// 练习3：创建一个简单的表单

// 难度：初级

// 创建一个用户注册表单，包含：
// 用户名输入
// 邮箱输入
// 密码输入
// 提交按钮
// 表单验证

// 这个练习将帮助你理解：
// 表单处理
// 受控组件
// 基本验证逻辑
// useEffect的使用
import { Fragment, useState, useEffect } from "react"

type FormData = {
  username: string, 
  password: string,
  email: string,
}

type FormErrors = {
  usernameError?: string,
  passwordError?: string,
  emailError?: string,
}

export default function RegistrationForm() {
  const [formData, setFormDate] = useState<FormData>({ username: '', password: '', email: '' });
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => { 
    let newErrors: FormErrors = {};
    let regex = /^[^\s@]+@[^\s]+\.[^\s@]+$/g;
    if (formData.username.length < 3) {
      newErrors.usernameError = '用户名至少三位';
    } else if (formData.password.length < 3) {
      newErrors.passwordError = '密码至少三位';
    } else if (!regex.test(formData.email)) { 
      newErrors.emailError = '邮箱格式不正确';
    }
    setFormErrors(newErrors);
    setFormDisabled(Object.keys(newErrors).length === 0 ? false : true)
  }, [formData])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = e.target;
    setFormDate({ ...formData, [name]: value });
  }

  const handleSubmit = () => { 
    if (formDisabled) {
      console.log('请检查');
    } else { 
      console.log('全部通过')
    }
  }

  return (
    <Fragment>
      <h5>初级：注册表单</h5>
      用户名：<input type="text" name="username" onChange={handleChange} value={formData.username}></input><br/>
      密码：<input type="text" name="password" onChange={handleChange} value={formData.password}></input><br/>
      邮箱: <input type="text" name="email" onChange={handleChange} value={formData.email}></input><br/>
      <button disabled={formDisabled} onClick={handleSubmit}>提交</button>
    </Fragment>
  )
}