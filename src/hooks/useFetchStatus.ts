import { useEffect, useState } from 'react';

export const useFetchStatus = (loading: boolean, error: boolean, message: string) => {
  const [send, setSend] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (loading) {
      setSend(true);
    }
  }, [loading]);

  useEffect(() => {
    if (message && !error) {
      setSuccess(true);
    }
  }, [message, error]);

  return {
    send,
    success,
  };
};
