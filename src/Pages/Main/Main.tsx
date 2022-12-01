import React, { FunctionComponent } from 'react';

import s from './main.module.scss';
import 'react-accessible-accordion/dist/fancy-example.css';

import Thermal from '../../Assets/img/Thermal.svg'
import Electrics from '../../Assets/img/Electrics.svg'
import support from '../../Assets/icons/support.svg'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import global from '../../global.module.scss';
import 'react-accessible-accordion/dist/fancy-example.css';

import Registration from '../Registration/Registration'
import Header from '../../Components/Header/Header';
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';
import Counter from '../../Components/Counter/Counter';
import ModalCategories from '../../Components/Modals/ModalCategories/ModalCategories';
import ModalSubstations from '../../Components/Modals/ModalSubstations/ModalSubstations'

function Main() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [side, setSide] = React.useState("")

  React.useEffect(()=>{
    console.log(side)
  },[side])

  return (
    <>
      <Registration />
      <Header />
      <div className={global.container}>
        <div className={s.main_container}>
          <div className={s.main_top}>
            <div className={s.project_info}>
              <h1 className={s.project__title}>Название проекта</h1>
              <PrimaryButton action={() =>setOpen(true)} title={'Новый проект'} />
              <PrimaryButton title={'Проект в работе'} />
            </div>
            <div className={s.project__accordion}>
              <Accordion className={s.accordion}>
                <AccordionItem className={s.accordion__item}>
                  <AccordionItemHeading className={s.accordion__heading}>
                    <AccordionItemButton className={s.accordion__button}>
                      Информация по общим вопросам
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={s.accordion__panel}>
                    <p>
                      Текст
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={s.accordion__item}>
                  <AccordionItemHeading className={s.accordion__heading}>
                    <AccordionItemButton className={s.accordion__button}>
                      Регион нахождения проекта
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={s.accordion__panel}>
                    <p>
                      Текст
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={s.accordion__item}>
                  <AccordionItemHeading className={s.accordion__heading}>
                    <AccordionItemButton className={s.accordion__button}>
                      Получены документы на земельный участок
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={s.accordion__panel}>
                    <p>
                      Текст
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={s.accordion__item}>
                  <AccordionItemHeading className={s.accordion__heading}>
                    <AccordionItemButton className={s.accordion__button}>
                      Стадия проектирования
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={s.accordion__panel}>
                    <p>
                      Текст
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={s.accordion__item}>
                  <AccordionItemHeading className={s.accordion__heading}>
                    <AccordionItemButton className={s.accordion__button}>
                      Назначение проектирования
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={s.accordion__panel}>
                    <p>
                      Текст
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className={s.project_buttons}>
              <button className={s.support}>
                <img src={support} alt="" />
                <span className="support__label">Задать вопрос</span>
              </button>
              <PrimaryButton title={'Собрать объект'} />
            </div>
          </div>
          {/* Main top */}
          <div className={s.main_bottom}>
            <div className={s.buttons_sections}>
              <div className={`${s.section__item} ${s.green}`}>
                <img src={Thermal} alt="" />
                <h4 className={s.section__title}>Объекты теплоэнергетики</h4>
                {
                  open5 &&
                   ( side === "Высокая сторона" ?
                      <ModalSubstations action={()=> {
                        setOpen6(true)
                        setOpen5(false)
                      }} title={"Высокая сторона"} voltageValues={['500', '220', '110', '35', '10', '6']} cellsValueMin = {'2'} cellsValueMax = {'10'}/> :
                      side === "Средняя сторона" ?
                          <ModalSubstations action={()=> {
                            setOpen6(true)
                            setOpen5(false)
                          }} title={"Средняя сторона"} voltageValues={['220', '110', '35', 'нет']} cellsValueMin = {'2'} cellsValueMax = {'30'}/> :
                          <ModalSubstations action={()=> {
                            setOpen6(true)
                            setOpen5(false)
                          }}  title={"Низкая сторона"} voltageValues={['35', '10', '6', '0', "4"]} cellsValueMin = {'2'} cellsValueMax = {'50'}/>
               ) }
              </div>
              {
                !open5 &&
                  <div className={`${s.section__item} ${s.blue}`}>
                    <img src={Electrics} alt="" />
                    <h4 className={s.section__title}>Электротехническое оборудование</h4>
                    {
                        open &&
                        <ModalCategories action={() => {
                          setOpen(false)
                          setOpen2(true)
                        }
                        } title={'Электротехническое оборудование'} categories={['Реконструкция', 'Новое строительство']}/>
                    }
                    {
                        open2 &&
                        <ModalCategories action={() => {
                          setOpen2(false)
                          setOpen3(true)}
                        } title={'Новое строительство'} categories={['Основное оборудование', 'Вспомогательное оборудование']}/>
                    }
                    {
                        open3 &&
                        <ModalCategories action={() => {
                          setOpen3(false)
                          setOpen4(true)}
                        } title={'Распределительное оборудование'} categories={['Линии электропередач', 'Подстанции']}/>
                    }
                    {
                        open4 &&
                        <ModalCategories action={() => {
                          setOpen4(false)
                          setOpen5(true)}
                        } setState={setSide} title={'Подстанции'} categories={['Высокая сторона', 'Средняя сторона', `Низкая сторона`]}/>
                    }
                    {
                        open6 &&
                        <ModalCategories action={() => {
                          setOpen5(false)
                        /*  setOpen5(true)*/
                        }
                        } setState={setSide} title={'Ввести наименование проекта'} categories={['Высокая сторона', 'Средняя сторона', `Низкая сторона`]} type={"input"}/>
                    }
                  </div>

              }
            </div>
            <div className={s.main__counters}>
              <Counter value={122} label={'проектировщика'}/>
              <Counter value={56} label={'проектов в работе'}/>
              <PrimaryButton title={'Партнёры'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
