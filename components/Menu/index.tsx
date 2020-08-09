import React from 'react';
import MenuItem from './MenuItem';
import style from './style.module.scss';
import { addTab, TabContext, TabKey, tabMap } from '../../providers/tab';

interface Props {
  closeMenuHandler: () => void;
}

const Menu: React.FC<Props> = ({ closeMenuHandler }) => {
  const { dispatch } = React.useContext(TabContext);

  return React.useMemo(
    () => (
      <ul className={style.list}>
        {Object.entries(tabMap).map(([key, tab]) => (
          <MenuItem
            key={tab.href}
            onClick={() => {
              closeMenuHandler();
              dispatch(addTab(key as TabKey));
            }}
            href={tab.href}
            src={tab.icon}
            alt={tab.title}
          />
        ))}
      </ul>
    ),
    [dispatch, closeMenuHandler],
  );
};

export default React.memo(Menu);
