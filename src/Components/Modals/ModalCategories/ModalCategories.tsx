import React, { FunctionComponent } from 'react';
import s from './modalCategories.module.scss';

interface OwnProps {
  title: string,
  categories: string[]
}

type Props = OwnProps;

const ModalCategories: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className={s.modal_categories}>
        <h4 className={s.modal__title}>{props.title}</h4>
        <div className={s.categories}>
          {
            props.categories.map((category) => {
              return (
                <span className={s.categories__item}>{category}</span>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ModalCategories
