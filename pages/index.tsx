import { useRouter } from 'next/router';
import React from 'react';
import IndexPage from '../components/pages/IndexPage';
import { addTab, TabContext } from '../providers/tab';
import { getClientStorage } from '../utils/clientStorage';

export default (): ReturnType<React.FC> => {
  const router = useRouter();
  const { dispatch } = React.useContext(TabContext);

  React.useEffect(() => {
    const storage = getClientStorage();
    const noFirstVisit = storage.getItem('noFirstVisit');
    if (!noFirstVisit) {
      storage.setItem('noFirstVisit', 'true');
      router.push('/home');
      dispatch(addTab('/home'));
    }
  }, []);
  return <IndexPage />;
};
