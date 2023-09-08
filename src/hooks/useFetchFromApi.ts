import { useState } from 'react';
import { SearchSickList, GetSickListResponseType } from '../lib/api/SearchSickList';
import { HttpClient } from '../lib/api/HttpClient';

const httpClient = new HttpClient();

interface FetchResult {
  fetchFromAPI: (keyword: string, useCache: boolean) => Promise<GetSickListResponseType | null>;
  error: Error | null;
}

export const useFetchFromAPI = (): FetchResult => {
  const [error, setError] = useState<Error | null>(null);

  const fetchFromAPI = async (
    keyword: string,
    useCache: boolean,
  ): Promise<GetSickListResponseType | null> => {
    const searchSickList = new SearchSickList(httpClient);
    try {
      const result = await searchSickList.getSickList(keyword, useCache);
      return result;
    } catch (err) {
      console.error('API 호출 오류:', err);
      setError(err as Error);
      return null;
    }
  };

  return { fetchFromAPI, error };
};
