import { useState } from 'react';
import { SvgEye } from '../../components/Svg/SvgEye';
import './AuthPage.scss';

export const AuthPage = () => {
  const [passwordField, setPasswordField] = useState(false);
  const [confirmPasswordField, setConfirmPasswordField] = useState(false);



  return (
    <div className="flex-center auth-page">
      <form className="auth-form">
        <h1 className="auth-title">
          Регистрация
        </h1>
        <label className="auth-label" htmlFor="name">
          Имя
          <input type="text" placeholder="Артур" />
        </label>
        <label htmlFor="email" className='error'>
          Электронная почта
          <input type="text" placeholder="example@mail.ru" />
        </label>
        <label className="pos-rel" htmlFor="password">
          Пароль
          <input type={passwordField ? 'text' : 'password'} placeholder="******" />
          <div className="show-pass" onClick={()=>setPasswordField(prev => !prev)} >
            <SvgEye />
          </div>
        </label>
        <label className="pos-rel" htmlFor="confirm">
          Подтвердите пароль
          <input type={confirmPasswordField ? 'text' : 'password'} placeholder="******" />
          <div className="show-pass" onClick={()=>setConfirmPasswordField(prev => !prev)} >
            <SvgEye />
          </div>
        </label>
        <input className="submit" type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
};
