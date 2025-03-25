import { useState, useEffect } from 'react';

interface ResponseData { 
  data: string | null,
  error: string | null,
  loading: boolean,
}

export default function useRequest(fn: () => Promise<string>): ResponseData { 
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    const fetchData = async function () { 
      try { 
        const res = await fn();
        setData(res);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'error');
      } finally { 
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  

  return { data, loading, error };
}