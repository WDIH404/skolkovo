import React, { FunctionComponent } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import s from './registration.module.scss';

import global from '../../global.module.scss';

import logo from '../../Assets/img/logo.svg';
import user from '../../Assets/img/user.svg';
import login from '../../Assets/icons/mail.svg'
import password from '../../Assets/icons/password.svg'

import DarkButton from '../../Components/Buttons/DarkButton/DarkButton';
import Input from '../../Components/Input/Input'

function Registration() {
  const options = [
    'Заказчик', 'Руководитель проекта', 'Внешний подрядчик'
  ];
  const defaultOption = options[0];
  return (
    <>
      <div className={s.registration_page}>
        <div className={global.container}>
          <div className={s.registration_content}>
            <img className={s.registration__logo} src={logo} alt="Logotype" />
            <div className={s.registration__block}>
              <form action="" className={s.registration__form}>
                <img src={user} alt="Avatar" className={s.form__user} />
                <div className={s.form_auth}>
                  <Input icon={login} type={"text"} placeholder={"логин"}/>
                  <Input icon= {password} type={"password"} placeholder={"пароль"}/>
                  <div className={s.auth_control}>
                    <button className={s.auth__button}>запомнить меня</button>
                    <button className={s.auth__button}>забыл пароль?</button>
                  </div>
                  <DarkButton title={'Войти'} />
                </div>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
