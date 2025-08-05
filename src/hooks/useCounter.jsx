import { useState } from 'preact/hooks'
import { useCallback } from 'react';

export function useCounter() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrement=()=>setCount(count=>count - 1);

    return { count, increment, decrement };
}