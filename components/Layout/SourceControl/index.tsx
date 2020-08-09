import React from 'react';
import style from './style.module.scss';

const SourceControl: React.FC = () => {
  return (
    <div className={style.button}>
      <img src="/images/source-control.svg" alt="source control" />
      master
    </div>
  );
};

export default SourceControl;
