import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import GitHubPath from './GitHubPath';
import style from './style.module.scss';
import SubsectionBlock from './SubsectionBlock';
import { addTab, TabContext } from '../../../providers/tab';

interface Props {
  about: string;
  skill: {
    languages: string[];
    libraries: string[];
    devTools: string[];
  };
  work: {
    name: string;
    url: string;
    path: string;
  }[];
  contacts: {
    name: string;
    url: string;
  }[];
}

const HomePage: React.FC<Props> = (props) => {
  const { dispatch } = React.useContext(TabContext);
  return (
    <>
      <Head>
        <title>Home | Web Developer</title>
        <meta
          name="description"
          content="Home page of Anakin Yuen's website. Come to see more info about me."
        ></meta>
      </Head>
      <div className={style.main}>
        <section>
          <h1>Welcome</h1>
          <p>{props.about}</p>
        </section>
        <section className={style.left}>
          <h1>Skill</h1>
          <SubsectionBlock title="Languages I speak">
            {props.skill.languages.join(', ')}
          </SubsectionBlock>
          <SubsectionBlock title="Libraries / Framework I use">
            {props.skill.libraries.join(', ')}
          </SubsectionBlock>
          <SubsectionBlock title="DevTools I use">
            {props.skill.devTools.join(', ')}
          </SubsectionBlock>
        </section>
        <section>
          <h1>Recent Projects</h1>
          <ul className={style.list}>
            {props.work.map((project) => (
              <li key={project.url}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                <GitHubPath className={style.path} href={project.path} />
              </li>
            ))}
            <li>
              <Link href="/work">
                <a onClick={() => dispatch(addTab('/work'))}>More ...</a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h1>Contacts</h1>
          <ul className={style.list}>
            {props.contacts.map((contact) => (
              <li key={contact.url}>
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  {contact.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default HomePage;
