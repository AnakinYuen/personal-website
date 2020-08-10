import React from 'react';
import style from './style.module.scss';

interface Props {
  onClick: () => void;
}

const Completed: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={style.completed}>
      <h1>Thank you!</h1>
      <h2>Your message has been sent</h2>
      <button onClick={onClick}>Send again</button>
    </div>
  );
};

export default Completed;
