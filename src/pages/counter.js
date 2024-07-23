import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const storeCount = localStorage["pageVisit"];

        setCount(Number(storeCount) || 0);

        setCount((prevPageViews) => {
            const newPageViews = prevPageViews + 1;
            localStorage.setItem('pageVisit', newPageViews);
            return newPageViews;
        });

        
    }, []);



    return (
        <> Visitors: {count} </>
    )
}