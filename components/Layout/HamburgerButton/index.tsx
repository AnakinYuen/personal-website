import React from 'react';
import style from './style.module.scss';

interface Props extends Required<Pick<React.DOMAttributes<HTMLDivElement>, 'onClick'>> {
  active: boolean;
}

const HamburgerButton: React.FC<Props> = ({ onClick, active }) => {
  return (
    <div
      className={`${style.hamburger} ${style['hamburger--squeeze']} ${
        active ? style['is-active'] : ''
      }`}
      onClick={onClick}
    >
      <div className={style['hamburger-box']}>
        <div className={style['hamburger-inner']}></div>
      </div>
    </div>
  );
};

export default HamburgerButton;
