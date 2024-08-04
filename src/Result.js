import { useState } from "react";

const Result = (initialWord) => {
    const [result, setResult] = useState({
        word: '',
        meaning: [],
        success: false,
        firstLoad: true,
    });
    const [error, setError] = useState(null);

    const searchWord = async (word) => {
        if (word !== '') {
            setResult({ ...result, firstLoad: false });
            setError(null);

            try {
                const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                const response = await fetch(url);

                if (!response.ok) {
                    if (response.status === 404) {
                        const errorData = await response.json();
                        throw new Error(JSON.stringify(errorData));
                    }
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setResult({
                    word: data[0].word,
                    meaning: data[0].meanings,
                    success: true,
                    firstLoad: false
                });
            } catch (error) {
                console.error('Error:', error);
                setResult({
                    ...result,
                    success: false,
                    firstLoad: false
                });
                setError(JSON.parse(error.message));
            }
        }
    };

    return { result, error, searchWord };
};

export default Result;