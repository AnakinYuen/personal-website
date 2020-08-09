import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import style from './style.module.scss';
import { Tab } from '../../../../types';

type Props = Tab & Required<Pick<React.DOMAttributes<HTMLDivElement>, 'onClick'>>;

const TabItem: React.FC<Props> = ({
  onClick,
  title,
  href,
  icon = '/images/file.svg',
  colorClass = '',
}) => {
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <div className={`${style.item} ${active ? style['item--active'] : ''}`}>
      <Link href={href}>
        <div className={style.title}>
          <img className={`${style.icon} ${colorClass}`} src={icon} alt="icon" />
          {title}
        </div>
      </Link>
      <img className={style.close} src="/images/close.svg" alt="close" onClick={onClick} />
    </div>
  );
};

export default TabItem;
