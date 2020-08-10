import { GetStaticProps } from 'next';
import HomePage from '../components/pages/HomePage';
import { passThroughProps } from '../utils/passThroughProps';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      about: `Hi, I'm Anakin Yuen. I'm a front-end developer from Hong Kong. This is my portfolio website in which you can find the projects I did in the past few years. With enthusiasm in web development, I am aspired to be a Full-stack developer. I truly believe the saying: "Always bet on the Web".`,
      skill: {
        languages: ['HTML', 'JSX', 'SCSS', 'CSS', 'TypeScript', 'JavaScript', 'PHP', 'SQL'],
        libraries: [
          'React',
          'Preact',
          'GatsbyJS',
          'Next.js',
          'Vue',
          'Ionic 2',
          'Phaser 2',
          'Express',
        ],
        devTools: [
          'VS Code',
          'GitHub',
          'GitLab',
          'SourceTree',
          'Terminal',
          'Babel',
          'Webpack',
          'Prettier',
          'Figma',
          '...',
        ],
      },
      work: [
        {
          name: 'time-to-leave',
          url: 'https://github.com/AnakinYuen/time-to-leave',
          path: '/time-to-leave',
        },
        {
          name: 'time-to-leave-api',
          url: 'https://github.com/AnakinYuen/time-to-leave-api',
          path: '/time-to-leave-api',
        },
        {
          name: 'bit-react',
          url: 'https://github.com/AnakinYuen/bit-react',
          path: '/bit-react',
        },
        {
          name: 'inline-event-target',
          url: 'https://github.com/AnakinYuen/inline-event-target',
          path: '/inline-event-target',
        },
        {
          name: 'exif-cleaner',
          url: 'https://github.com/AnakinYuen/exif-cleaner',
          path: '/exif-cleaner',
        },
      ],
      contacts: [
        {
          name: 'Email',
          url: 'mailto:anakinyuen1024@gmai1.com',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/AnakinYuen',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/ka-long-yuen-701aba152/',
        },
      ],
    },
  };
};

export default passThroughProps(HomePage);
