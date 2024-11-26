import React, {useEffect, useState} from 'react'

function Timer() {
    const [count, setCount ] = useState(0);

    useEffect (() => {
        const timer = setInterval(() => setCount(count + 1), 1000);
        return () => clearInterval(timer);
    }, [count]);

    return <div>Count : {count}</div>
}

export default Timer;
