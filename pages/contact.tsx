import { GetStaticProps } from 'next';
import ContactPage from '../components/pages/ContactPage';
import { passThroughProps } from '../utils/passThroughProps';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      createdDate: Date.now(),
    },
  };
};

export default passThroughProps(ContactPage);
