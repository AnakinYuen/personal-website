import Head from 'next/head';
import React from 'react';
import MessageBlock, { Props as MessageBlockProps } from './MessageBlock';
import style from './style.module.scss';
import { ask, ChatContext, thunk, YourMessageMap } from '../../../providers/chat';
import { getDate } from '../../../utils/time';

export const NOW = new Date();

interface MessagesByDate {
  [date: string]: MessageBlockProps[];
}

const scrollToBottom = () => {
  setTimeout(() => {
    window.scrollBy(0, Number.MAX_SAFE_INTEGER);
  }, 100);
  setTimeout(() => {
    window.scrollBy(0, Number.MAX_SAFE_INTEGER);
  }, 500);
};

const AllMessages: React.FC = () => {
  React.useEffect(scrollToBottom);
  const { state } = React.useContext(ChatContext);
  const messages = state.messages;
  const messagesByDate: MessagesByDate = {};
  messages.forEach((message) => {
    const date = message.date.toLocaleDateString();
    if (!messagesByDate[date]) {
      messagesByDate[date] = [];
    }
    messagesByDate[date].push(message);
  });

  return (
    <>
      {Object.values(messagesByDate).map((msgGroup) => (
        <React.Fragment key={msgGroup[0].date.toLocaleString()}>
          <h3 className={style.date}>{getDate(msgGroup[0].date)}</h3>
          {msgGroup.map((msg) => (
            <MessageBlock key={`${msg.date.getTime()}`} {...msg} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

const Controls: React.FC = () => {
  const { dispatch } = React.useContext(ChatContext);

  return React.useMemo(() => {
    const dispatchThunk = thunk(dispatch);
    return (
      <div className={style.control}>
        {Object.keys(YourMessageMap).map((key) => (
          <button
            className="gtm-btn"
            data-key={key}
            key={key}
            onClick={() => dispatchThunk(ask(key))}
          >
            {YourMessageMap[key]}
          </button>
        ))}
      </div>
    );
  }, [dispatch]);
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About — Anakin Yuen</title>
        <meta
          name="description"
          content="About page of Anakin Yuen's website. Come to see who I am and ask me questions."
        ></meta>
      </Head>
      <style jsx global>{`
        html {
          background: #1a1c21;
        }
      `}</style>
      <div className={style.main}>
        <div className={style.header}>
          <h3>Anakin Yuen</h3>
          <button className={style.button}>
            <img src="images/dark/search.svg" alt="search" />
          </button>
          <button className={style.button}>
            <img src="images/dark/more.svg" alt="more" />
          </button>
        </div>
        <div className={style.content}>
          <img
            className={style.avatar}
            src="https://avatars0.githubusercontent.com/u/10099001"
            width="64"
            height="64"
            alt="avatar"
          />
          <h2>Anakin Yuen</h2>
          <p>What do you want to know about me?</p>
          <AllMessages />
        </div>
        <Controls />
      </div>
    </>
  );
};

export default AboutPage;
