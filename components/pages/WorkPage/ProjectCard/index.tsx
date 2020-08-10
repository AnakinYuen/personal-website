import React from 'react';
import style from './style.module.scss';

export interface Props {
  image?: string;
  avatar: string;
  author: string;
  name: string;
  description: string;
  stacks: string[];
  links: {
    title: string;
    href: string;
  }[];
}

const CardImage: React.FC<{ image: string }> = ({ image }) => {
  let content: JSX.Element = null;

  if (image) {
    const path = image.slice(0, -3);
    if (image.endsWith('.gif')) {
      content = (
        <video className={style.video} autoPlay muted playsInline loop>
          <source src={`${path}webm`} type="video/webm" />
          <source src={`${path}mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      content = (
        <picture>
          <source srcSet={`${path}webp`} type="image/webp" />
          <img className={style.picture} src={image} alt="thumbnail" />
        </picture>
      );
    }
  } else {
    content = (
      <picture>
        <source srcSet="/images/code.webp" type="image/webp" />
        <img className={style.picture} src="/images/code.jpg" alt="thumbnail" />
      </picture>
    );
  }
  return <div className={style.image}>{content}</div>;
};

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <article className={style.card}>
      <CardImage image={props.image} />
      <div className={style.content}>
        <div className={style.info}>
          <img className={style.avatar} width="32" height="32" src={props.avatar} alt="avatar" />
          <span className={style.author}>{props.author}</span>
          <span className={style.name}>{props.name}</span>
        </div>
        <p>{props.description}</p>
        <p className={style.stacks}>
          {props.stacks.map((stack) => (
            <img key={stack} src={`/images/icons/${stack}.svg`} alt={stack} />
          ))}
        </p>
        <div className={style.links}>
          {props.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
