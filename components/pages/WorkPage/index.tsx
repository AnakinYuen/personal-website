import Head from 'next/head';
import React from 'react';
import ProjectCard, { Props as ProjectCardProps } from './ProjectCard';
import style from './style.module.scss';

interface Props {
  projects: ProjectCardProps[];
}

const WorkPage: React.FC<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Work — Anakin Yuen</title>
        <meta
          name="description"
          content="Work page of Anakin Yuen's website. Come to see what I have done."
        ></meta>
      </Head>
      <div className={style.main}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
};

export default WorkPage;
