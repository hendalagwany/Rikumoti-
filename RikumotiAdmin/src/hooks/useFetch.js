import { useState, useEffect } from "react";

export function useFetch(fetchFunction, dependencies = []) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const load = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);
        } catch {
            setError("Faild to load data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        load();

    }, dependencies);

    return {
        data, loading, error, refetch: load
    };
}