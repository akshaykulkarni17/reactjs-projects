import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [term , setTerm] = useState('');
    const [results, setResults] = useState([]);

    //console.log(results);

    useEffect(()=> {

        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                            params:{
                                action: 'query',
                                list: 'search',
                                origin: '*',
                                format: 'json',
                                srsearch: term
                            }
                        });
            setResults(data.query.search); 
        };
        const timeoutId = setTimeout(()=>{
            if(term){
                search();
            };
        },1000);
        
        return(()=>{
            clearTimeout(timeoutId);
        })
        
    },[term]);
    
    const renderedResults = results.map((result)=>{
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                    <a 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        {result.title}
                    </a>
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        );
    });
    return (
        <div>
        <div className="ui form">
            <div className="field">
                <label>Enter term to search..</label>
                <input 
                    className="input" 
                    value={term} 
                    onChange={e => setTerm(e.target.value)} />
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
        </div>
    );
};

export default Search;