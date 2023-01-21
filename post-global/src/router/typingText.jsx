import React, {useEffect, useState} from 'react';

const TypingText = ({text}) => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(text.slice(0, i));
            i++;
            if (i === text.length + 1) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [text]);

    return <p>{typedText}</p>;
};

export default TypingText;
