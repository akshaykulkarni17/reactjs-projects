import React from "react";
import  ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = {latitude : null, errorMessage : ''};
        
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude : position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        );
    };
    render(){
        if(this.state.latitude && !this.state.errorMessage){
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        if(!this.state.latitude && this.state.errorMessage){
            return <div className="season-display">Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Please allow location..."/>;
    }
};

ReactDOM.render(
    <App/>, document.querySelector("#root")
);