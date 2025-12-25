import React, {useState, useEffect} from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';

const MatrixText = ({text, delay = 0}) => {
    const [displayText, setDisplayText] = useState('');
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        let frame = 0;
        const totalFrames = 32;
        const interval = 30;
        let timeoutId;
        let intervalId;

        const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

        const animate = () => {
            intervalId = setInterval(() => {
                frame++;
                const revealedCount = Math.floor((frame / totalFrames) * text.length);

                let result = '';
                for (let i = 0; i < text.length; i++) {
                    if (i < revealedCount) {
                        result += text[i];
                    } else {
                        result += randomChar();
                    }
                }
                setDisplayText(result);

                if (frame >= totalFrames) {
                    clearInterval(intervalId);
                    setDisplayText(text);
                    setIsAnimating(false);
                }
            }, interval);
        };

        timeoutId = setTimeout(animate, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, delay]);

    return <span className={isAnimating ? 'matrix-text' : ''}>{displayText}</span>;
};

export default MatrixText;
