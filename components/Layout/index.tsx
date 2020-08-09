import Link from 'next/link';
import React from 'react';
import { Required } from 'utility-types';
import HamburgerButton from './HamburgerButton';
import SourceControl from './SourceControl';
import style from './style.module.scss';
import TabBar from './TabBar';
import { addTab, TabContext } from '../../providers/tab';
import Menu from '../Menu';
import { Tab } from '../../types';

type Props = Required<React.Props<unknown>, 'children'>;

const MemoHomeLink = React.memo(({ onClick }: { onClick: () => void }) => (
  <Link href="/home">
    <img src="/images/dark/logo-icon.png" alt="logo" onClick={onClick} />
  </Link>
));

const MemoTabBar = React.memo(({ tabs }: { tabs: Tab[] }) => (
  <div className={style['tab-bar']}>
    <TabBar tabs={tabs} />
  </div>
));

const MemoFooter = React.memo(() => (
  <footer className={style.footer}>
    <SourceControl />
  </footer>
));

const Layout: React.FC<Props> = ({ children }) => {
  const { state, dispatch } = React.useContext(TabContext);
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = React.useCallback(() => setShowMenu((isShow) => !isShow), [setShowMenu]);
  const hideMenu = React.useCallback(() => setShowMenu(false), [setShowMenu]);
  const addHomeTab = React.useCallback(() => {
    hideMenu();
    dispatch(addTab('/home'));
  }, [setShowMenu, dispatch]);

  return (
    <div>
      <div className={`${style.menu} ${showMenu ? style['menu--active'] : ''}`}>
        <Menu closeMenuHandler={hideMenu} />
      </div>
      <header className={style.header}>
        <HamburgerButton active={showMenu} onClick={toggleMenu} />
        <MemoHomeLink onClick={addHomeTab} />
      </header>
      <MemoTabBar tabs={state.tabs} />
      <main className={style.main}>{children}</main>
      <MemoFooter />
    </div>
  );
};

export default Layout;
