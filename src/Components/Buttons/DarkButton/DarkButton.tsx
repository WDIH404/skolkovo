import React, {FunctionComponent} from 'react';
import s from "./darkButton.module.scss"

interface OwnProps {
  title: string
}

type Props = OwnProps;

const DarkButton: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button className={s.dark_button}>{props.title}</button>
    </>
  )
}

export default DarkButton