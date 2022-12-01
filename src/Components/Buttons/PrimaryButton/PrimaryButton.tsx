import React, {FunctionComponent} from 'react';
import s from "./primaryButton.module.scss"

interface OwnProps {
  
  title: string
    action? : ()=>void
}

type Props = OwnProps;

const PrimaryButton: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button onClick={()=> {
          if (props.action){
              props.action()
              console.log("Выполнил")
          }
          console.log(props.action)
        console.log(12)
      }} className={s.primary}>{props.title}</button>
    </>
  )
}

export default PrimaryButton