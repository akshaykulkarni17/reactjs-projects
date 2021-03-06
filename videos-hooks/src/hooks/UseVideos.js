import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const UseVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);
    
    const search= async (term) => {
        const response = await youtube.get('/search',{
                                params:{
                                    q: term
                                }
                            });
        //console.log(response);
        setVideos(response.data.items);
    };
    return [videos,search];
};

export default UseVideos;