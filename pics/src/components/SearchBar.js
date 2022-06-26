import React from "react";


class SearchBar extends React.Component {

    state = ({term : ''})

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label htmlFor="imageSearch"> Image Search</label>
                    <input id="imageSearch" type="text" placeholder="type here.."  value={this.state.term} onChange={(e)=>{this.setState({term : e.target.value})}}></input>
                </form>
            </div>
        );
    }
};

export default SearchBar;