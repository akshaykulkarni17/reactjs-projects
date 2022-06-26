import { useEffect, useState } from "react";

const Route = ({path,children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        const OnRouteChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate',OnRouteChange);
        return () => {
            window.removeEventListener('popstate');
        }
    },[])
   return currentPath===path ? children : null;
};

export default Route;
