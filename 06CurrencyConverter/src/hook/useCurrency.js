import { useState, useEffect } from 'react';

const useCurrencyInfo = currency => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
            .then(response => response.json())
            .then(res => setData(res[currency]))
            .catch(e => console.error(e.message));
    }, [currency]);
    return data;
};
export default useCurrencyInfo;
