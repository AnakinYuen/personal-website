import React from 'react';
import style from './style.module.scss';
import TabItem from './TabItem';
import { removeTab, TabContext, TabKey } from '../../../providers/tab';
import { Tab } from '../../../types';

interface Props {
  tabs: Tab[];
}

const TabBar: React.FC<Props> = ({ tabs }) => {
  const { dispatch } = React.useContext(TabContext);
  return (
    <div className={style.bar}>
      {tabs.map((tab) => (
        <TabItem key={tab.href} {...tab} onClick={() => dispatch(removeTab(tab.href as TabKey))} />
      ))}
    </div>
  );
};

export default TabBar;
