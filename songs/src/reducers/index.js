import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {
            title: 'Barbie Girl',
            duration: "3:25"
        },
        {
            title: 'In the end',
            duration: "4:25"
        },
        {
            title: 'Lose yourself',
            duration: "1:25"
        },{
            title: 'Macarena',
            duration: "6:25"
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs : songsReducer,
    selectedSong :  selectedSongReducer
});