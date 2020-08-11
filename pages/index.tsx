import { useRouter } from 'next/router';
import React from 'react';
import IndexPage from '../components/pages/IndexPage';
import { addTab, TabContext } from '../providers/tab';

export default (): ReturnType<React.FC> => {
  const router = useRouter();
  const { dispatch } = React.useContext(TabContext);

  React.useEffect(() => {
    const noFirstVisit = sessionStorage.getItem('noFirstVisit');
    if (!noFirstVisit) {
      sessionStorage.setItem('noFirstVisit', 'true');
      router.push('/home');
      dispatch(addTab('/home'));
    }
  }, []);
  return <IndexPage />;
};
