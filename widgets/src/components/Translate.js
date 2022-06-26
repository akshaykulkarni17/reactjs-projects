import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";


const options = [
    {
        label : 'Afrikaans',
        value: 'af'
    },
    {
        label : 'Arabic',
        value: 'ar'
    },
    {
        label : 'Hindi',
        value: 'hi'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Chinese',
        value: 'zh'
    },
    {
        label: 'Telugu',
        value: 'te'
    }
];

const Translate = () => {
    const [language,setLanguage] = useState(options[2]);
    const [text,setText] = useState('');
    return (
        <div className="ui form">
            <div className="field">
                <label>Enter text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
        <div>
            <Dropdown
                label='Select a language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
        </div>
        <div className="ui header">
            <h3>Output</h3>
            <Convert text={text} language={language}/>
        </div>
        </div>
    );
};

export default Translate;