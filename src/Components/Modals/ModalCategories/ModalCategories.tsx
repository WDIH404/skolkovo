import React, { FunctionComponent } from 'react';
import s from './modalCategories.module.scss';
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

interface OwnProps {
  title: string
  categories: string[]
  action: ()=>void
  setState? : (e:any)=>void
  type?:string
}

type Props = OwnProps;

const ModalCategories: FunctionComponent<Props> = (props) => {

  const [isChanged, setIsChanged] = React.useState(false)

  const onButtonClick = (e:any) => {
    props.action()
    if (props.setState){
      props.setState(e)
    }
  }

  return (
    <>
      <div className={s.modal_categories}>
        <h4 className={s.modal__title}>{props.title}</h4>
        {
          props.type &&
            props.type === "input" ?
              <>
                <input type="text" onChange={()=>setIsChanged(true)} placeholder={"Введите название проекта"}/>

              </>
              :
              <div className={s.categories}>
                {
                  props.categories.map((category) => {
                    return (
                        <span onClick={() => onButtonClick(category)} className={s.categories__item}>{category}</span>
                    )
                  })
                }
              </div>
        }
        {isChanged &&
            <PrimaryButton title={"Завершить"}/>}
      </div>
    </>
  )
}

export default ModalCategories
