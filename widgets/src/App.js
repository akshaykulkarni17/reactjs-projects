import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title : 'What is React?',
        content: 'React is Front end web framework'
    },
    {
        title : 'Why use React?',
        content: 'React is favourite JS library among web engineers'
    },
    {
        title : 'How do you use React?',
        content: 'You use react by creating components'
    }
];

const options = [
    {
        label : 'This is red',
        value : 'red'
    },
    {
        label : 'This is green',
        value : 'green'
    },
    {
        label : 'This is blue',
        value : 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    
    return (
        <div className="ui container">
            <div className="ui header">
                <Header/>
            </div>
            <Route path={'/'}>
                <Accordion items={items}/>
            </Route>
            <Route path={'/search'}>
                <Search/>
            </Route>
            <Route path={'/dropdown'}>
                <Dropdown
                    label='Select a color'
                    options={options} 
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path={'/translate'}>
                <Translate/>
            </Route>
        </div>
    )
};

export default App;