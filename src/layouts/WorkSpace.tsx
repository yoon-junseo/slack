import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Redirect } from 'react-router';
import fetcher from '@utils/fetcher';

const WorkSpace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default WorkSpace;
