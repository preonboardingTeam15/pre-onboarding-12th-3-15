import { useState } from 'react';
import localCache from '../lib/cache/localCache';
import { SickListData } from 'sickType';

interface CacheResponse {
  response: SickListData;
}

export const useFetchFromCache = (initialUseCache: boolean) => {
  const [useCache, setUseCache] = useState<boolean>(initialUseCache);

  const fetchFromCache = async (keyword: string): Promise<CacheResponse | null> => {
    const cachedResult = await localCache.readFromCache(keyword);

    if (cachedResult && cachedResult.length) {
      console.log('캐시로 반환된 값');
      setUseCache(true);
      return { response: cachedResult };
    }

    setUseCache(false);
    return null;
  };

  return { useCache, fetchFromCache };
};
