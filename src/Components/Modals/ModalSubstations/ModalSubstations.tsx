import React, { FunctionComponent } from 'react';
import s from './modalSubstations.module.scss';

interface OwnProps {
  title: string;
  voltageValues: string[];
  cellsValueMin: string;
  cellsValueMax: string;
}

type Props = OwnProps;

const ModalSubstations: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className={s.modal_substations}>
        <h4 className={s.modal__title}>{props.title}</h4>
        <div className={s.modal__items}>
          <div className={s.voltage}>
            <span className={s.voltage__title}>Напряжение</span>
            <div className={s.voltage__values}>
              {props.voltageValues.map((voltageValue) => {
                return (
                  <span className={s.voltage__item}>{voltageValue}</span>
                );
              })}
            </div>
          </div>
          <div className={s.cells}>
            <span className={s.cells__title}>Количество ячеек</span>
            <div className={s.cells__values}>
              <span className={s.cells__label}>
                от {props.cellsValueMin} до {props.cellsValueMax}
              </span>
              <input type="text" className={s.cells__value} placeholder={'0'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSubstations;
