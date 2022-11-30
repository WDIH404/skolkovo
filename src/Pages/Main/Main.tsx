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

import Header from '../../Components/Header/Header';
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';
import Counter from '../../Components/Counter/Counter';
import ModalCategories from '../../Components/Modals/ModalCategories/ModalCategories';

function Main() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Header />
      <div className={global.container}>
        <div className={s.main_container}>
          <div className={s.main_top}>
            <div className={s.project_info}>
              <h1 className={s.project__title}>Название проекта</h1>
              <PrimaryButton title={'Новый проект'} />
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
              </div>
              <div onClick={() => setOpen(!open)} className={`${s.section__item} ${s.blue}`}>
                <img src={Electrics} alt="" />
                <h4 className={s.section__title}>Электротехническое оборудование</h4>
                {
                  open && <ModalCategories title={'Электротехническое оборудование'} categories={['Реконструкция', 'Новое строительство']}/>
                }
              </div>
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
