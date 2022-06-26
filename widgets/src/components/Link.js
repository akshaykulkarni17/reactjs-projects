import React from "react";

const Link = ({className,href,children}) => {

    const onclick = (event) => {
        event.prevenDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    } 
    return (
        <a onClick={onclick} href={href} className={className}>
            {children}
        </a>
    );
};

export default Link;