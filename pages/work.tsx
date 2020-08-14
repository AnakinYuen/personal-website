import { GetStaticProps } from 'next';
import WorkPage from '../components/pages/WorkPage';
import { passThroughProps } from '../utils/passThroughProps';

const projects = [
  {
    image: '/images/projects/personal-website.png',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'personal-website',
    description: `Anakin Yuen's personal website`,
    stacks: ['nextjs', 'workbox', 'pwa', 'lighthouse', 'vercel'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/personal-website',
      },
      {
        title: 'Website',
        href: 'https://anakinyuen.com',
      },
    ],
  },
  {
    image: '/images/projects/time-to-leave.gif',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'time-to-leave',
    description: 'A simple alarm helps you countdown to the time to leave',
    stacks: ['gatsby', 'material-ui'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/time-to-leave',
      },
      {
        title: 'Website',
        href: 'https://anakinyuen.github.io/time-to-leave/',
      },
    ],
  },
  {
    image: '/images/projects/time-to-leave-api.jpg',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'time-to-leave-api',
    description: 'AWS Lambda API to manipulate MongoDB Atlas for time-to-leave',
    stacks: ['aws-lambda', 'mongodb', 'serverless'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/time-to-leave-api',
      },
    ],
  },
  {
    image: '/images/projects/bit-react.gif',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'bit-react',
    description: 'React Component Collection for bit.dev',
    stacks: ['bit', 'react', 'browserslist', 'storybook-icon'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/bit-react',
      },
      {
        title: 'Bit.dev',
        href: 'https://bit.dev/anakinyuen/react',
      },
    ],
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'inline-event-target',
    description: 'An EventTarget polyfill with onevent supported',
    stacks: ['travis-ci', 'npm', 'javascript'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/inline-event-target',
      },
      {
        title: 'npm',
        href: 'https://www.npmjs.com/package/@anakinyuen/inline-event-target',
      },
    ],
  },
  {
    image: '/images/projects/exif-cleaner.png',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'exif-cleaner',
    description: 'A simple Progressive Web App for stripping off EXIF data from any image',
    stacks: [
      'preact',
      'parcel',
      'pwa',
      'prettier',
      'sass',
      'typescript',
      'babel',
      'eslint',
      'workbox',
      'figma',
    ],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/exif-cleaner',
      },
      {
        title: 'Website',
        href: 'https://anakinyuen.github.io/exif-cleaner/',
      },
    ],
  },
  {
    image: '/images/projects/unify.css.png',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'unify.css',
    description:
      'A stylesheet generator to makes browsers render all elements more consistently and in line with modern standards',
    stacks: ['svelte', 'prettier', 'sass', 'eslint'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/unify.css',
      },
      {
        title: 'Website',
        href: 'https://anakinyuen.github.io/unify.css/',
      },
    ],
  },
  {
    image: '/images/projects/scroll-direction.png',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'scroll-direction',
    description: '0 dependency JavaScript library for monitoring scroll direction in the element',
    stacks: ['npm', 'cypress', 'gulp', 'rollup', 'prettier', 'eslint', 'typescript', 'babel'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/scroll-direction',
      },
      {
        title: 'npm',
        href: 'https://www.npmjs.com/package/@anakinyuen/scroll-direction',
      },
    ],
  },
  {
    image: '/images/projects/progressive-image.gif',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'progressive-image',
    description:
      'Enriches the native img element by using multiple Progressive Image Rendering strategies',
    stacks: ['npm', 'gulp', 'prettier', 'eslint', 'web-components'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/progressive-image',
      },
      {
        title: 'npm',
        href: 'https://www.npmjs.com/package/@anakinyuen/progressive-image',
      },
    ],
  },
  {
    image: '/images/projects/NotePad.png',
    avatar: 'https://avatars0.githubusercontent.com/u/10099001',
    author: 'AnakinYuen',
    name: 'NotePad',
    description: 'Mac OS 7 Note Pad emulator',
    stacks: ['vue', 'rxjs', 'express', 'sass', 'heroku'],
    links: [
      {
        title: 'GitHub',
        href: 'https://github.com/AnakinYuen/NotePad',
      },
      {
        title: 'Website',
        href: 'https://mac-os-7-note-pad.herokuapp.com/',
      },
    ],
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      projects,
    },
  };
};

export default passThroughProps(WorkPage);
