import { ChangeEvent, FormEvent, useState } from 'react';
import { SvgEye } from '../../components/Svg/SvgEye';
import './AuthPage.scss';

export const AuthPage = () => {
  const [passwordField, setPasswordField] = useState<boolean>(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState<boolean>(false);
  const [confirmPasswordFieldError, setConfirmPasswordFieldError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const changeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const ValidateEmail = () => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.match(isValidEmail)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setConfirmPasswordFieldError(true);
    } else {
      setConfirmPasswordFieldError(false);
    }

    //отправить запрос на регистрацию
    // if (!confirmPasswordFieldError && !emailError) {

    // }
    //отправить запрос на вход
    // if (!emailError) {

    // }
  }


  return (
    <div className="flex-center auth-page">
      <form className="auth-form" onSubmit={e=>submitHandler(e)}>
        <h1 className="auth-title">
          Регистрация
        </h1>
        <label className="auth-label" htmlFor="name">
          Имя
          <input type="text" placeholder="Артур" />
        </label>
        <label htmlFor="email" className={emailError ? `error` : ``}>
          Электронная почта
          <input
            type="email"
            placeholder="example@mail.ru"
            onChange={changeEmail}
            onFocus={()=>setEmailError(false)}
            onBlur={ValidateEmail}
          />
        </label>
        <label className="pos-rel" htmlFor="password">
          Пароль
          <input
            type={passwordField ? 'text' : 'password'}
            placeholder="******"
            value={password}
            onChange={changePassword}
            required
          />
          <div className="show-pass" onClick={()=>setPasswordField(prev => !prev)} >
            <SvgEye />
          </div>
        </label>
        <label className={confirmPasswordFieldError ? `pos-rel error`: `pos-rel`} htmlFor="confirm">
          Подтвердите пароль
          <input
            type={confirmPasswordField ? 'text' : 'password'}
            placeholder="******"
            value={confirmPassword}
            onChange={changeConfirmPassword}
            onFocus={()=>setConfirmPasswordFieldError(false)}
          />
          <div className="show-pass" onClick={()=>setConfirmPasswordField(prev => !prev)}>
            <SvgEye />
          </div>
        </label>
        <input className="submit" type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};
