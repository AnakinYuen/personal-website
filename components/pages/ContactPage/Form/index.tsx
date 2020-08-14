import React from 'react';
import Completed from './Completed';
import MarkdownArea from './MarkdownArea';
import style from './style.module.scss';

interface Props {
  messageRef: React.MutableRefObject<string>;
  nameRef: React.MutableRefObject<HTMLInputElement>;
  emailRef: React.MutableRefObject<HTMLInputElement>;
  onClick: () => void;
}

const Form: React.FC<Props> = (props) => {
  const [hidden, setHidden] = React.useState(false);
  const markdownAreaRef = React.useRef<MarkdownArea>();

  const onClick = () => {
    if (props.nameRef.current && props.emailRef.current && markdownAreaRef.current) {
      props.onClick();
      setHidden(true);
      props.nameRef.current.value = '';
      props.emailRef.current.value = '';
      markdownAreaRef.current.clear();
    }
  };

  return (
    <div className={style.container}>
      <div className={`${style.form} ${hidden ? style['form--hidden'] : ''}`}>
        <h2 className={style.message}>
          <label htmlFor="mde">Your Message*</label>
        </h2>
        <MarkdownArea messageRef={props.messageRef} ref={markdownAreaRef} />
        <h3 className={style.guest}>Send as a guest</h3>
        <div className={style.input}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={props.nameRef} />
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" ref={props.emailRef} />
        </div>
        <button className={`gtm-btn ${style.button}`} onClick={onClick}>
          Send Your Message
        </button>
      </div>
      <div className={`${style.completed}  ${hidden ? style['completed--show'] : ''}`}>
        <Completed onClick={() => setHidden(false)} />
      </div>
    </div>
  );
};

export default Form;
