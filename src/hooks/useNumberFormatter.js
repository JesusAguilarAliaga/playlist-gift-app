import { useState, useEffect } from 'react';

const useNumberFormatter = (number) => {
    const [formattedNumber, setFormattedNumber] = useState('');

    useEffect(() => {
        const formatNumber = (num) => {
            const numberWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return numberWithCommas;
        };

        const formatted = formatNumber(number);
        setFormattedNumber(formatted);
    }, [number]);

    return formattedNumber;
};

export default useNumberFormatter;
