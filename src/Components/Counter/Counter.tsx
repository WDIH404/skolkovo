import React, {FunctionComponent} from 'react';
import s from "./primaryButton.module.scss"

interface OwnProps {
  
  title: string
  action: ()=>void
}

type Props = OwnProps;

const PrimaryButton: FunctionComponent<Props> = (props) => {

  const onButtonClick = () => {
    props.action()
  }

  return (
    <>
      <button onClick={onButtonClick} className={s.primary}>{props.title}</button>
    </>
  )
}

export default PrimaryButton