import React, { FunctionComponent } from 'react';
import s from './input.module.scss';

interface OwnProps {
  placeholder: string;
  icon: string;
  type: string;
}

type Props = OwnProps;

const Input: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className={s.input}>
        <img src={props.icon} alt="Icon" className={s.input__icon} />
        <input className={s.input__value} type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
};

export default Input;
