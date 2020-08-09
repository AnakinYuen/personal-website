import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import style from './style.module.scss';
import { addTab, TabContext } from '../../../providers/tab';

const IndexPage: React.FC = () => {
  const { dispatch } = React.useContext(TabContext);
  return (
    <>
      <Head>
        <title>Index — Anakin Yuen</title>
        <meta
          name="description"
          content="Welcome to Anakin Yuen's website. Check out all the information about me."
        ></meta>
      </Head>
      <div className={style.main}>
        <Link href="/home">
          <picture>
            <source media="(min-resolution: 3dppx)" srcSet="/images/dark/logo_3x.webp" />
            <source media="(min-resolution: 3dppx)" srcSet="/images/dark/logo_3x.png" />
            <source media="(min-resolution: 2dppx)" srcSet="/images/dark/logo_2x.png" />
            <img src="/images/dark/logo.png" alt="logo" onClick={() => dispatch(addTab('/home'))} />
          </picture>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
