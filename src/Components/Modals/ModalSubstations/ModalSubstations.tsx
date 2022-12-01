import React, { FunctionComponent } from 'react';
import s from './modalSubstations.module.scss';
import img from "../../../Assets/img/checkbox.png"
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

interface OwnProps {
  title: string;
  voltageValues: string[];
  cellsValueMin: string;
  cellsValueMax: string;
  action?: ()=>void
}

type Props = OwnProps;

const ModalSubstations: FunctionComponent<Props> = (props) => {

  const [isChanged, setIsChanged] = React.useState(false)
  const [checkedValues, setCheckedValues] = React.useState([])

  const onCheckboxClick = (i:string) => {
    if (checkedValues.find((candidate) => candidate===i)){
      setCheckedValues(checkedValues.filter((item) => item!== i))
    } else {
      console.log("Добавляем")
      // @ts-ignore

      setCheckedValues(checkedValues.concat(i))
    }
  }

  return (
    <>
      <div className={s.modal_substations}>
        <h4 className={s.modal__title}>{props.title}</h4>
        <div className={s.modal__items}>
          <div className={s.voltage}>
            <span className={s.voltage__title}>Напряжение</span>
            <div className={s.voltage__values}>
              {props.voltageValues.map((voltageValue, i:number) => {
                return (
                    <div className={s.checkbox} onClick={()=>
                        onCheckboxClick(voltageValue)}>
                      <div className={s.wrapper}>
                        {
                          checkedValues.find((candidate) => candidate===voltageValue) &&
                            <img src={img} alt="light"/>
                        }
                      </div>
                      <span className={s.voltage__item}>{voltageValue}</span>
                    </div>
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
              <input type="text" onChange={()=>setIsChanged(true)} className={s.cells__value} placeholder={'0'} />
            </div>

          </div>
          {
              isChanged &&
              <PrimaryButton action={() =>
                  // @ts-ignore
                  props.action()} title={"Далее"}/>
          }
        </div>
      </div>
    </>
  );
};

export default ModalSubstations;
