import Head from 'next/head';
import React from 'react';
import Form from './Form';
import Post from './Post';
import style from './style.module.scss';
import { contactEndpoint } from '../../../config';

// 1 day = 86 400 000 milliseconds
const oneDayMilliseconds = 86400000;

interface Props {
  createdDate: number;
}

let staticViewCount: number;

const getViewCount = async () => {
  if (!staticViewCount) {
    const response = await fetch(contactEndpoint);
    const json = (await response.json()) as { viewCount: number };
    staticViewCount = json.viewCount;
  }
  return staticViewCount;
};

const ContactPage: React.FC<Props> = ({ createdDate }) => {
  const [viewCount, setViewCount] = React.useState(0);
  const messageRef = React.useRef<string>(null);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const now = Date.now();
  const date = new Date(createdDate);
  const daysAgo = Math.floor((now - createdDate) / oneDayMilliseconds);

  React.useEffect(() => {
    getViewCount().then(setViewCount);
  }, []);

  const onClick = () => {
    if (
      emailRef.current &&
      emailRef.current.value &&
      nameRef.current &&
      nameRef.current.value &&
      messageRef.current
    ) {
      const formData = new FormData();
      formData.append('name', nameRef.current.value);
      formData.append('email', emailRef.current.value);
      formData.append('message', messageRef.current);
      fetch(contactEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });
    }
  };
  return (
    <>
      <Head>
        <title>Contact — Anakin Yuen</title>
        <meta
          name="description"
          content="Contact page of Anakin Yuen's website. Come to see how to contact me or leave a message to me."
        ></meta>
      </Head>
      <div className={style.main}>
        <h1 className={style.title}>How can I contact you?</h1>
        <div className={style.infos}>
          <div className={style.info}>
            <span>Asked</span> {daysAgo} days ago
          </div>
          <div className={style.info}>
            <span>Active</span> {daysAgo} days ago
          </div>
          <div className={style.info}>
            <span>Viewed</span> {viewCount || '-'} times
          </div>
        </div>
        <Post mode="ask" date={date} avatar="/images/chat/Nyan Cat.png" name="Nyan Cat">
          I am interested in your works and had fews questions. How can I contact you?
        </Post>
        <h2 className={style.answer}>1 Answer</h2>
        <Post
          mode="answer"
          date={date}
          avatar="https://avatars0.githubusercontent.com/u/10099001"
          name="Anakin Yuen"
          tick
        >
          <p>
            You can find me by email (anakinyuen1024@gmail.com) or message me in LinkedIn (
            <a
              href="https://www.linkedin.com/in/ka-long-yuen-701aba152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/ka-long-yuen-701aba152/
            </a>
            )
          </p>
          <p>
            You can even send message to me directly by filling the following form. Don't worry.
            Your message will NOT be posted to public (here).
          </p>
        </Post>
        <Form messageRef={messageRef} nameRef={nameRef} emailRef={emailRef} onClick={onClick} />
      </div>
    </>
  );
};

export default ContactPage;
