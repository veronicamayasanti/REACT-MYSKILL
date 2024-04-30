import { useState, useEffect } from "react";

function Timers() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [])
    return <h1> saya telah merender {count} kali!</h1>
}

export default Timers;