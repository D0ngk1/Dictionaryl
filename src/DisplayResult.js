import { useState,useEffect } from "react";
import Result from "./Result";
import { useLocation  } from 'react-router-dom';
import './DisplayResult.css'
import { useNavigate } from 'react-router-dom';
const DisplayResult = () => {
    const [word,setWord]=useState('');
    const [firstWord,setFirstWord]=useState('');
    const location = useLocation();
    const [first,setFirst]=useState(true);
    const {result,error,searchWord } = Result(word);
    const navigate = useNavigate();



    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          setWord(firstWord);
        }
    };
    /*if (first){
        const word1 = location.state?.word;
        setWord(word1);
        setFirst(false);
    }*/
    const home = () =>{
        navigate("/");
    }
    useEffect(() => {
        if (location.state && location.state.word) {
            setWord(location.state.word);
        }
    }, [location.state]);

    useEffect(() => {
        if (word) {
            searchWord(word);
            setFirstWord(word);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [word]);


    return (
        <div className="display-container">
            <div className="header-display">
                <h1 className="title-header-display" onClick={home}><strong className="name">D</strong>iction<strong className="name">ARYL</strong></h1>
                <input type="text" className="search-bar-display" value={firstWord} onChange={(e)=>setFirstWord(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
            <div className="result">
                <div>
                { error  ? (
                    <p>No results found. Please try searching for another word.</p>
                    ) : 
                result.firstLoad !== true && result.success === true &&  (
                <div className="result-container">
                    <h2>{result.word.charAt(0).toUpperCase() + result.word.slice(1)}</h2>
                    <div className="meanings">
                      {result.meaning.map((meaning, index) => (
                        <div className="user" key={index}>
                            <h3 key={index}><strong>{meaning.partOfSpeech.toUpperCase()}</strong></h3>
                            {meaning.definitions.map((definition, index) => (
                                <p key={index}><strong>{index+1+". "}</strong>{definition.definition}</p>
                            ))}
                        </div>
                        ))}
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default DisplayResult;
