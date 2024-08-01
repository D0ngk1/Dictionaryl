import { useState,useEffect } from "react";
import Result from "./Result";
import { useLocation  } from 'react-router-dom';
import './DisplayResult.css'
const DisplayResult = () => {
    const [word,setWord]=useState('');
    const location = useLocation();
    const [first,setFirst]=useState(true);
    const {result,searchWord } = Result(word);

    const handleSearch = () => {
        searchWord(word);
    };
    const handleKeyDown = (e) => {
        
        if (e.key === 'Enter') {
          handleSearch();
        }
    };
    if (first){
        const word1 = location.state?.word;
        setWord(word1);
        setFirst(false);
    }
    useEffect(() => {
        if(word!==undefined){
            handleSearch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
   

    return (
        <div className="display-container">
            <div className="header-display">
                <h1 className="title-header-display"><strong>D</strong>iction<strong>ARYL</strong></h1>
                <input type="text" className="search-bar-display" value={word} onChange={(e)=>setWord(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
            <div className="result">
                <div>
                {result.firstLoad !== true && result.success === true &&  (
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
