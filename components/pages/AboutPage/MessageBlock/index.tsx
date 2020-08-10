import React from 'react';
import style from './style.module.scss';
import { getRandomInt } from '../../../../utils/math';
import { getTime } from '../../../../utils/time';

export interface Props {
  avatar: string;
  name: string;
  date: Date;
  messages: string[];
}

const avatarStyle: React.CSSProperties = {
  backgroundColor: `hsl(${getRandomInt(0, 360)}, 67%, 32%)`,
};

const splitNewLine = (text: string) => {
  const result: (JSX.Element | string)[] = [];
  const textArr = text.split('\n');
  const lastWord = textArr.pop();
  textArr.forEach((word) => {
    result.push(<React.Fragment key={word}>{word}</React.Fragment>);
    result.push(<br key={`${word}_br`} />);
  });
  result.push(<React.Fragment key={lastWord}>{lastWord}</React.Fragment>);
  return result;
};

const MessageBlock: React.FC<Props> = (props) => {
  return (
    <div className={style.message}>
      <img
        style={avatarStyle}
        className={style.avatar}
        src={props.avatar}
        width="48"
        height="48"
        alt="avatar"
      />
      <div className={style.content}>
        <h3 className={style.name}>
          {props.name} <span>{getTime(props.date)}</span>
        </h3>
        {props.messages.map((msg, i) => (
          <p key={i}>{splitNewLine(msg)}</p>
        ))}
      </div>
    </div>
  );
};

export default MessageBlock;
