import Link from 'next/link';
import React from 'react';
import style from './style.module.scss';

interface Props
  extends Pick<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    'onClick'
  > {
  href: string;
  src: string;
  alt: string;
}

const MenuItem: React.FC<Props> = (props) => {
  return (
    <li className={style.item} onClick={props.onClick}>
      <Link href={props.href}>
        <a className={style.link} title={props.alt}>
          <img src={props.src} alt={props.alt} />
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
