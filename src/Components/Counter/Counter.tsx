import React, {FunctionComponent} from 'react';
import s from "./counter.module.scss"

interface OwnProps {
  
  value: number
  label: string
}

type Props = OwnProps;

const Counter: FunctionComponent<Props> = (props) => {

  return (
    <>
      <div className={s.counter}>
        <h2 className={s.counter__value}>{props.value}</h2>
        <span className={s.counter__label}>{props.label}</span>
      </div>
    </>
  )
}

export default Counter