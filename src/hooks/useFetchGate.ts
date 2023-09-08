import { useEffect, useState } from 'react';
import { useFetchFromAPI } from './useFetchFromApi';
import { useFetchFromCache } from './useFetchFromCache';
import { GetSickListResponseType } from '../lib/api/SearchSickList';

export const useFetchGate = (initialUseCache: boolean, debouncedQuery: string) => {
  const [sickList, setSickList] = useState<GetSickListResponseType | null>(null);
  const { useCache, fetchFromCache } = useFetchFromCache(initialUseCache);
  const { fetchFromAPI } = useFetchFromAPI();

  useEffect(() => {
    if (!debouncedQuery || !debouncedQuery.length) return;
    const fetchData = async () => {
      let data = await fetchFromCache(debouncedQuery);
      if (!data) {
        data = await fetchFromAPI(debouncedQuery, useCache);
      }
      setSickList(data);
    };
    fetchData();
  }, [debouncedQuery, useCache]);

  return sickList;
};
