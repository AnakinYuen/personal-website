import React from 'react';
import { Required } from 'utility-types';
import style from './style.module.scss';

interface Props extends Required<React.Props<unknown>, 'children'> {
  title: string;
}

const SubsectionBlock: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={style.block}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};

export default SubsectionBlock;
