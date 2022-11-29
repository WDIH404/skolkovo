import React, {FunctionComponent} from 'react';
import s from "./primaryButton.module.scss"

interface OwnProps {
  
  title: string
}

type Props = OwnProps;

const PrimaryButton: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button className={s.primary}>{props.title}</button>
    </>
  )
}

export default PrimaryButton