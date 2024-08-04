//import { useEffect } from "react";
import {   useState } from "react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [word,setWord] = useState('');    
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            navigate("/display",{ state: { word } });
        }
        
      };

    return (
        <>  
            <div className='search-container'>
                <h1 className="title"><strong className="name">D</strong>iction<strong className="name">ARYL</strong></h1>
            
                <input type="text" className="search-bar" value={word} onChange={(e)=>setWord(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
            
            
        </>
    )
}
export default Hero;