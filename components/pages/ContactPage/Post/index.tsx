import React from 'react';
import style from './style.module.scss';
import { monthAbbr } from '../../../../utils/time';

const UpVote = () => (
  <svg width="36" height="36" viewBox="0 0 36 36">
    <path d="M2 26h32L18 10 2 26z"></path>
  </svg>
);

const DownVote = () => (
  <svg width="36" height="36" viewBox="0 0 36 36">
    <path d="M2 10h32L18 26 2 10z"></path>
  </svg>
);

const Tick = () => (
  <svg width="36" height="36" viewBox="0 0 36 36">
    <path d="M6 14l8 8L30 6v8L14 30l-8-8v-8z" fill="#63b47c"></path>
  </svg>
);

interface Props {
  date: Date;
  avatar: string;
  name: string;
  mode: 'ask' | 'answer';
  tick?: boolean;
}

const Post: React.FC<Props> = (props) => {
  const month = monthAbbr[props.date.getMonth()];
  const day = props.date.getDate();
  const hours = props.date.getHours();
  const minutes = `${props.date.getMinutes()}`.padStart(2, '0');
  return (
    <div className={style.post}>
      <div className={style.vote}>
        <UpVote />
        0
        <DownVote />
        {props.tick ? <Tick /> : null}
      </div>
      <div className={style.content}>
        {props.children}
        <div className={style.member}>
          <div className={style.menu}>Share</div>
          <div className={style.owner}>
            <div className={style.date}>
              {props.mode}ed {month} {day} at {hours}:{minutes}
            </div>
            <div className={style.avatar}>
              <img src={props.avatar} alt="avatar" width="32" height="32" />
            </div>
            <div className={style.name}>{props.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
