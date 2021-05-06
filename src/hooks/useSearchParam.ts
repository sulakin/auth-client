import { useLocation } from 'react-router';

export const useSearchParam = (query: string): string => {
  const searchParams = new URLSearchParams(useLocation().search);
  const param = searchParams.get(query) || '';

  return param;
};
