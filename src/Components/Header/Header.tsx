import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './header.module.scss';
import g from '../../global.module.scss';

import user from '../../Assets/icons/user.svg';
import home from '../../Assets/icons/home.svg';
import calendar from '../../Assets/icons/calendar.svg';
import share from '../../Assets/icons/share.svg';
import settings from '../../Assets/icons/settings.svg';
import logout from '../../Assets/icons/logout.svg';
import notifications from '../../Assets/icons/notifications.svg'

function Header() {
  return (
    <header className={s.navbar}>
      <div className={g.container}>
        <div className={s.navbar_content}>
          <div className={s.account}>
            <img src={user} alt="User Icon" className={s.account__icon} />
            <span className={s.account__title}>Личный кабинет</span>
          </div>
          <ul className={s.navbar_menu}>
            <a href="" className="navbar_menu__link">
              <img src={home} alt="" className="navbar_menu__icon" />
            </a>
            <a href="" className="navbar_menu__link">
              <img src={calendar} alt="" className="navbar_menu__icon" />
            </a>
            <a href="" className="navbar_menu__link">
              <img src={share} alt="" className="navbar_menu__icon" />
            </a>
            <a href="" className="navbar_menu__link">
              <img src={settings} alt="" className="navbar_menu__icon" />
            </a>
            <a href="" className="navbar_menu__link">
              <img src={logout} alt="" className="navbar_menu__icon" />
            </a>
            <a href="" className="navbar_menu__link">
              <img src={notifications} alt="" className="navbar_menu__icon" />
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
