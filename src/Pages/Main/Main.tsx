import React, { FunctionComponent } from 'react';
import s from './main.module.scss';

import global from '../../global.module.scss';

import Header from '../../Components/Header/Header';
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';

function Main() {
  return (
    <>
      <Header />
      <div className={global.container}>
        <div className={s.project_info}>
          <h1 className={s.project__title}>Название проекта</h1>
          <PrimaryButton title={'Новый проект'} />
          <PrimaryButton title={'Проект в работе'} />
        </div>
      </div>
    </>
  );
}

export default Main;
