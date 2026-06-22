import { useEffect, useState } from "react";
import { showError } from "../utils/alerts";

export function useEditMode(id, emptyData, fetchFunction) {
    const isEditMode = Boolean(id);

    const [data, setData] = useState(emptyData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isEditMode) {
            setLoading(false);
            return;
        }
        const loadData = async () => {
            try {
                const result = await fetchFunction(id);
                setData(result);
            } catch (error) {

                showError(
                    "Operation faild",
                    error.message
                )
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [id, isEditMode, fetchFunction]);

    return{
        data,
        setData,
        loading,
        error,
        isEditMode
    };
}