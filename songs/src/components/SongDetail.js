import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
    if(!song) return <>Select a song</>
    return (
        <div className="card">
            <h3>Selected song:</h3>
            <p>
                Title : {song.title}
                <br/>
                Duration : {song.duration}
            </p>
        </div>
    );
}

const mapStateToProps = state => {
    return {song : state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);