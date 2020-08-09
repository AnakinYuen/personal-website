/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Router from 'next/router';
import React, { useReducer } from 'react';
import { Required } from 'utility-types';
import { Tab } from '../types';

type Props = Required<React.Props<unknown>, 'children'>;

export type TabKey = '/home' | '/about' | '/skill' | '/work' | '/contact';

interface State {
  tabs: Tab[];
}

export const tabMap: Record<TabKey, Tab> = {
  '/home': {
    href: '/home',
    icon: '/images/dark/logo-icon.png',
    title: 'Home',
  },
  '/about': {
    href: '/about',
    icon: '/images/dark/person.svg',
    title: 'About',
    colorClass: 'icon-blue',
  },
  '/skill': {
    href: '/skill',
    icon: '/images/dark/gear.svg',
    title: 'Skill',
    colorClass: 'icon-yellow',
  },
  '/work': {
    href: '/work',
    icon: '/images/dark/briefcase.svg',
    title: 'Work',
    colorClass: 'icon-green',
  },
  '/contact': {
    href: '/contact',
    icon: '/images/dark/mail.svg',
    title: 'Contact',
    colorClass: 'icon-red',
  },
};

const initalState: State = {
  tabs: [],
};

const ADD_TAB = 'ADD_TAB';
const REMOVE_TAB = 'REMOVE_TAB';

export const addTab = (tabKey: TabKey) => ({
  type: ADD_TAB as typeof ADD_TAB,
  payload: tabMap[tabKey],
});

export const removeTab = (tabKey: TabKey) => ({
  type: REMOVE_TAB as typeof REMOVE_TAB,
  payload: tabMap[tabKey].href,
});

type Action = ReturnType<typeof addTab | typeof removeTab>;

interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const TabContext = React.createContext({} as Context);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_TAB:
      if (state.tabs.find((tab) => tab.href === action.payload.href)) {
        return state;
      }
      return { tabs: [...state.tabs, action.payload] };
    case REMOVE_TAB:
      const idx = state.tabs.findIndex((tab) => tab.href === action.payload);
      if (idx === -1) {
        return state;
      }
      if (Router.pathname === action.payload) {
        const previousTab = state.tabs[idx - 1];
        const nextTab = state.tabs[idx + 1];
        Router.push(previousTab ? previousTab.href : nextTab ? nextTab.href : '/');
      }
      return { tabs: state.tabs.filter((tab) => tab.href !== action.payload) };
    default:
      return state;
  }
};

const Provider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  React.useEffect(() => {
    const key = location.pathname as TabKey;
    const tab = tabMap[key];
    if (tab) {
      dispatch(addTab(key));
    }
  }, [dispatch]);

  return <TabContext.Provider value={{ state, dispatch }}>{children}</TabContext.Provider>;
};

export default Provider;
