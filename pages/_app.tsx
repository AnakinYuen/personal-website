import { AppProps } from 'next/app';
import React from 'react';
import './fonts.css';
import './global.scss';
import './unify.scss';
import Layout from '../components/Layout';
import ChatProvider from '../providers/chat';
import TabProvider from '../providers/tab';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TabProvider>
      <ChatProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChatProvider>
    </TabProvider>
  );
};

export default MyApp;
