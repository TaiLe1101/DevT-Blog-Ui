import { useState, useEffect } from 'react';
import { axiosClient } from '~/utils';

export const useFetch = <T>(
    url: string,
    initValue: T
): [T, boolean, boolean] => {
    const [data, setData] = useState<T>(initValue);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await axiosClient.get(url);
                setData(result.data);
                setIsLoading(false);
            } catch (error) {
                setError(true);
                setIsLoading(false);
            }
        })();
    }, [url]);

    return [data, isLoading, error];
};
