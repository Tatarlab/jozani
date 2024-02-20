import { get } from 'lodash';
import { useRouter as useOriginRouter } from 'next/router';
import { useCallback } from 'react';

const useRouter = () => {
  const {
    query,
    ...router
  } = useOriginRouter();

  const getQueryParam = useCallback((
    param: string,
    def: unknown = '',
  ) => (get(query, param, def)) as string, [query]);

  return {
    ...router,
    query,
    getQueryParam,
  };
};

export default useRouter;
