import React from 'react';
import style from './style.module.scss';

const Loading: React.FC = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setActive(true));
  }, []);

  return (
    <div className={`${style.container} ${active ? style['container--active'] : ''}`}>
      <div className={style.row}>
        <span>Status</span>Loading...
      </div>
      <div className={style.row}>
        <span>Received</span>
        <div className={style.bar} />
      </div>
      <div className={style.button}>Stop</div>
    </div>
  );
};

export default Loading;
