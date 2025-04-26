import React from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

export const useSessionDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  React.useEffect(() => {
    const _session = async () => {
      try {
        const _session = await fetchAuthSession();
        const _isLoggedIn = _session.tokens !== undefined;
        setIsLoggedIn(_isLoggedIn);
      } catch (error) {
        console.error(error);
      }
    };
    _session();
  }, []);
  
 
  return { isLoggedIn };
};
