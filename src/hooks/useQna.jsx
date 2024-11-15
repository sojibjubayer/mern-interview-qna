// hooks/useQnA.js
import { useState, useEffect } from 'react';
import { getQnA } from '@/lib/getQnA';

const useQnA = () => {
    const [allQnA, setAllQnA] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchQnA = async () => {
        try {
            const data = await getQnA();
            console.log(data)
            setAllQnA(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching QnA:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQnA();
    }, []);

    return { allQnA, loading };
};

export default useQnA;
