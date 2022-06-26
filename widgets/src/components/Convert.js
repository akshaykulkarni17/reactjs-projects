import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({text,language}) => {
    const [converted, setConverted] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebouncedText(text);
        },500)
        return ()=>{
            clearTimeout(timeoutId);
        }
    },[text]);

    useEffect(()=>{
        const doTranslation = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params : {
                        q : debouncedText,
                        target : language.value,
                        key : API_KEY,
                    },
                }
            );
            setConverted(data.data.translations[0].translatedText);      
        };
        doTranslation();
    },[debouncedText,language]);
    return (
        <div className="content">
            {converted}
        </div>
    );
};

export default Convert;