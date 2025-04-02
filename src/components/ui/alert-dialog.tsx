import React, { useState, useEffect } from 'react';

interface AlertPrompt {
    alert: boolean
    number: string[]
}

const Alert: React.FC<AlertPrompt> = ({alert, number}) => {

    //ХУКИ:
    const [visibleNumbers, setVisibleNumbers] = useState<string[]>(number);
    //
    useEffect(() => {
        
        if(visibleNumbers.length > 0) return

        const timer = setTimeout(() => {
            setVisibleNumbers(prevNumber => prevNumber.slice(1))
        }, 5000);

        return () => clearTimeout(timer);
    }, [visibleNumbers]);

    return (
        alert && (
            number.map((entry) => (
                <div>{entry}</div>
            ))
        )
    );
};

export default Alert;