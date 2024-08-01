//import { useEffect } from "react";
import { useState } from "react";

const Result = (word) => {
   // const [isLoading,setisLoading]= useState(true)
    const [result,setResult] = useState({
        word:'',
        meaning:[],
        success:  false,
        firstLoad: true,
    })

    
    const searchWord = () => {
        if (word !== '') {
        setResult({firstLoad:false})
        //setisLoading(true)
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+word;
        fetch(url)
            .then(res => res.json())
            .then(data => {
            setResult({
                word: data[0].word,
                meaning: data[0].meanings,
                success: true,
                firstLoad: false
            });
            })
            .catch(error => {
            console.error('Error:', error);
            }).finally(()=>{
                //setisLoading(false)
            });
        }
        
    }


    return {result,searchWord}
/*
    return (
        <>  
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
        </>
    )
    */

}
export default Result;